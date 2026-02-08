'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        __ADPX_INITIALIZED__?: boolean;
        __ADPX_BOTTOM_SCRIPT_LOADED__?: boolean;
        AdpxConfig?: {
            accountId: string;
            themeId?: string;
            containerId?: string;
            autoShow?: boolean;
        };
        AdpxUser?: {
            placement?: string;
            domain_name?: string;
            page_url?: string;
            subid?: string;
        };
        Adpx?: {
            init: (config: Window['AdpxConfig']) => void;
        };
    }
}

interface AdPostXProps {
    containerId?: string;
    placement?: 'top' | 'bottom';
    accountId?: string;
    themeId?: string;
    subid?: string;
}

export default function AdPostX({
    containerId,
    placement = 'top',
    accountId = '40e5aa84b3c69dbf',
    themeId = 'Standard-Theme',
    subid = 'xyz',
}: AdPostXProps) {
    const launcherLoadedRef = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (window.__ADPX_INITIALIZED__) return;
        window.__ADPX_INITIALIZED__ = true;

        if (placement === 'top') {
            if (!containerId) {
                console.error('[AdPostX] containerId is required for placement="top"');
                return;
            }

            window.AdpxConfig = {
                accountId,
                themeId,
                containerId,
            };

            window.AdpxUser = {
                // payload optional
            };

            console.log('[AdPostX Top] Configured', {
                accountId,
                themeId,
                containerId,
            });
        }

        if (placement === 'bottom') {
            const targetWindow = window.self !== window.top ? window.top : window;

            if (!targetWindow) {
                console.error('[AdPostX Bottom] Cannot access target window');
                return;
            }

            targetWindow.AdpxConfig = {
                accountId,
                autoShow: false,
            };

            targetWindow.AdpxUser = {
                placement: 'exit_pop',
                domain_name: window.location.hostname,
                page_url: window.location.href,
                subid,
            };

            console.log('[AdPostX Bottom] Configured', {
                accountId,
                subid,
            });

            if (!launcherLoadedRef.current) {
                const loadLauncher = async () => {
                    const target = targetWindow.document.head || targetWindow.document.body;

                    if (targetWindow.document.getElementById('adpx-launcher')) {
                        console.log('[AdPostX Bottom] Launcher already exists');
                        launcherLoadedRef.current = true;
                        return;
                    }

                    const script = targetWindow.document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://cdn.pubtailer.com/launcher.min.js';
                    script.crossOrigin = 'anonymous';
                    script.async = true;
                    script.id = 'adpx-launcher';

                    target.appendChild(script);

                    // Esperar a que cargue
                    await new Promise<void>((resolve) => {
                        if (targetWindow.Adpx) {
                            resolve();
                        } else {
                            script.addEventListener('load', () => {
                                console.log('[AdPostX Bottom] Launcher script loaded');
                                resolve();
                            });
                        }
                    });

                    if (targetWindow.Adpx && targetWindow.AdpxConfig) {
                        targetWindow.Adpx.init(targetWindow.AdpxConfig);
                        console.log('[AdPostX Bottom] Adpx initialized');
                        launcherLoadedRef.current = true;
                    }
                };

                loadLauncher().catch((error) => {
                    console.error('[AdPostX Bottom] Error loading launcher:', error);
                });
            }
        }
    }, [placement, containerId, accountId, themeId, subid]);

    return (
        <>
            {placement === 'top' && containerId && (
                <div
                    id={containerId}
                    data-adpx-placement="top"
                />
            )}

            {placement === 'top' ? (
                <Script
                    src="https://cdn.adspostx.com/launcher.perkswall.js"
                    strategy="afterInteractive"
                    onLoad={() =>
                        console.log('[AdPostX Top] Perkswall script loaded')
                    }
                    onError={(e) =>
                        console.error('[AdPostX Top] Script load failed', e)
                    }
                />
            ) : (
                <Script
                    src="https://adpx.b-cdn.net/exit.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log('[AdPostX Bottom] Exit script loaded')
                    }
                    onError={(e) =>
                        console.error('[AdPostX Bottom] Script load failed', e)
                    }
                />
            )}
        </>
    );
}
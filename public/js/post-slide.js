function postSlide() {

    // ---------- Helpers ----------
    const forEach = (sel, fn) => document.querySelectorAll(sel).forEach(fn);

    forEach('.post-slide-hide', el => {
        el.classList.add('d-none');
        el.setAttribute('style', 'display: none !important');
    });

    forEach('.post-slide-show', el => {
        el.classList.remove('d-none');
        el.setAttribute('style', 'display: block'); // maintains the original behavior
        el.classList.remove('d-md-none');
        el.classList.remove('d-lg-none');
    });

    forEach('.post-slide-flex', el => {
        el.classList.remove('d-none');
        el.setAttribute('style', 'display: flex'); // maintains the original behavior
    });

    forEach('.post-slide-change', el => el.classList.add('changed'));

    forEach('.smartpath__container', el => {
        el.setAttribute('style', 'position: relative; margin-bottom: 0; top: 0;');
    });

    forEach('.remove-background-image', el => {
        el.setAttribute('style', 'background-image: none;');
    });

    forEach('.remove-background-color', el => {
        el.setAttribute('style', 'background-color: transparent;');
    });

    forEach('.remove-background', el => {
        el.setAttribute('style', 'background: none; border-bottom: none');
        el.classList.add('remove-pseudo');
    });

    // ---------- Progress Bar ----------
    const spProgressBarTotalSteps = document.querySelectorAll('.sp-progress-bar__step').length;
    const spProgressBarEl = document.querySelector('#sp-progress-bar');
    let spProgressBarCurrentStep = spProgressBarEl ?
        parseInt(spProgressBarEl.getAttribute('data-step-progress'), 10) :
        NaN;

    // Conservados aunque no se usen (como en el original)
    const spEmailField = document.querySelectorAll('#spForm input[name="EMAIL"]').length;
    const spSurveyIdField = document.querySelectorAll('#spForm input[name="SurveyId"]').length;

    let progress = false;
    let spProgressBarNextStep;
    const vectorMultipleChoicePage = document.querySelectorAll('.page-template-vector-multiple-choice-page').length;

    if (1 === spProgressBarCurrentStep) {
        spProgressBarNextStep = 2;
        progress = true;

        if (0 === vectorMultipleChoicePage) {
            forEach('.site-header__custom-container', el => el.classList.add('flex-nowrap'));
        }
    }

    function setProgressBarNextStep() {
        if (spProgressBarEl) {
            spProgressBarEl.setAttribute('data-step-progress', spProgressBarNextStep);
        }
    }

    function setStepStyleDone() {
        document.querySelectorAll(`.sp-progress-bar__step[data-step="${spProgressBarCurrentStep}"]`)
            .forEach(step => {
                step.classList.remove('active');
                step.classList.add('done');
                const icon = step.querySelector('.step-icon');
                if (icon) {
                    icon.innerHTML = '';
                    const next = icon.nextElementSibling;
                    if (next) {
                        next.textContent = 'Done';
                    }
                }
            });
    }

    function setStepDividerStyleActive() {
        document.querySelectorAll(`.sp-progress-bar__step-divider[data-step="${spProgressBarCurrentStep}"]`)
            .forEach(div => div.classList.add('active'));
    }

    function setNextStepStyleActive() {
        document.querySelectorAll(`.sp-progress-bar__step[data-step="${spProgressBarNextStep}"]`)
            .forEach(step => step.classList.add('active'));
    }

    if (spProgressBarCurrentStep <= spProgressBarTotalSteps && progress) {
        setProgressBarNextStep();
        setStepStyleDone();
        setStepDividerStyleActive();
        setNextStepStyleActive();
    }

    // ---------- Upper footer block ----------
    if (1 === spProgressBarCurrentStep) {
        const upper = document.getElementById('upper-footer-block');
        const logo = document.getElementById('logo_container');
        if (upper) {
            upper.style.display = '';
        }
        if (logo) {
            logo.style.display = '';
        }
    }
}

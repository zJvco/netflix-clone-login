const faqQuestionAllButton = document.querySelectorAll('#faq-question');

faqQuestionAllButton.forEach(e => {
    e.addEventListener('click', () => {
        const textQuestionAnswer = document.querySelectorAll('.text-question-answer');

        const parentElText = e.parentElement.children[1];

        /* textQuestionAnswer.forEach(textEl => {
            if (textEl.className === 'text-question-answer show') {
                textEl.classList.remove('show');
            }
        });*/

        parentElText.classList.toggle('show');
        e.classList.toggle('rotate');
    });
});
fetch('./data/today.json')
  .then(response => response.json())
  .then(game => {

    document.getElementById('prompt').textContent = game.prompt;

    const choicesDiv = document.getElementById('choices');

    game.choices.forEach((choice, index) => {

      const button = document.createElement('button');

      button.textContent = choice;

      button.onclick = () => {

        const result = document.getElementById('result');

        if (index === game.answerIndex) {
          result.innerHTML =
            "✅ Correct<br><br>" + game.verdict;
        } else {
          result.innerHTML =
            "❌ Incorrect<br><br>" + game.verdict;
        }

      };

      choicesDiv.appendChild(button);

    });

  });

(function() {
  fetch('./commands.json').then(function(commands) {
    return commands.json();
  }).then(function(items) {
    for (let item of items) {
      let idContainer = item.type === 'meme' ? 'meme' : 'commands';
      $('#' + idContainer + '-content').append('<div class="mt-4"><span class="font-weight-bold">' + item.command + '</span><br/>' + item.value + '</div>');
    }
  });

  fetch('./faq-netplay.json').then(function(questions) {
    return questions.json();
  }).then(function(items) {
    for (let item of items) {
      $('#faq-netplay-content').append('<div class="mt-4"><div class="font-weight-bold">' + item.question + '</div><div class="answer">' + item.answer + '</div></div>');
    }
  });
})();
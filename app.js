kaboom({
  global: true,
  width: 288,
  height: 400,
});

loadSprite('birdy', 'img/birdy.png');
loadSprite('bg', 'img/bg.png');
loadSprite('pipe', 'img/pipe.png');

scene('main', () => {
  add([sprite('bg')]);

  console.log(width());

  const birdy = add([sprite('birdy'), pos(100, 100), body()]);

  const JUMP_FORCE = 320;

  keyPress('space', () => {
    birdy.jump(JUMP_FORCE);
  });

  birdy.action(() => {
    if (birdy.pos.y >= height()) {
      go('gameover');
    }
  });

  birdy.collides('pipe', () => {
    go('gameover');
  });

  const PIPE_OPEN = 120;
  const PIPE_SPEED = 90;

  loop(1.8, () => {
    const pipePos = rand(10, height() - PIPE_OPEN);

    add([sprite('pipe'), origin('bot'), pos(width() + 30, pipePos), 'pipe']);

    add([sprite('pipe'), pos(width() + 30, pipePos + PIPE_OPEN), scale(1, -1), origin('bot'), 'pipe']);
  });

  action('pipe', pipe => {
    pipe.move(-PIPE_SPEED, 0);
  });
});

scene('gameover', () => {
  add([text('you lose!', 24), pos(width() / 2, height() / 2), origin('center')]);

  keyPress('space', () => {
    go('main');
  });
});

start('main');

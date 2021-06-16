kaboom({
  global: true,
  width: 288,
  height: 512,
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
    add([sprite('pipe'), pos(width(), 256 + PIPE_OPEN), 'pipe']);
    add([sprite('pipe'), pos(width(), 256 - PIPE_OPEN), scale(1, -1), 'pipe']);
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

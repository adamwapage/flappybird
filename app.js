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

  add([rect(width(), 12), pos(0, 280), origin('topleft'), solid()]);

  const PIPE_OPEN = 120;

  // Pipes are 52x320

  add([sprite('pipe'), pos(width() - 26, 256 + PIPE_OPEN)]);
  add([sprite('pipe'), pos(width() - 26, 256 - PIPE_OPEN), scale(1, -1)]);
});

start('main');

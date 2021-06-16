kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
});

loadSprite('birdy', 'img/birdy.png');

scene('main', () => {
  const birdy = add([sprite('birdy'), pos(100, 100), body()]);
});

start('main');

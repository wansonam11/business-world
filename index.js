const typeit = new TypeIt("#typeit", {
  speed: 130,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type("学びの世界へようこそ。", { delay: 1000 })
  .delete(11, { delay: 800 })
  .type("<small>学生は終わった。<small><br>")
  .type("ビジネスの世界へようこそ！")
  .go();

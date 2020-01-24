const tape = require("tape"),
      swoopy = require("../"),
      round = require("./utils/roundArray");

tape("cubic(a, b) returns a cubic Bezier curve from point a to b ", test => {
  test.deepEqual(
    round(swoopy.cubic([0, 0], [10, 0]), 3),
    round([[0,0],[1.1440000000000003,1.0800000000000003],[2.1920000000000006,1.4400000000000004],[3.1679999999999997,1.2599999999999996],[4.096,0.72],[5,0],[5.904,-0.72],[6.831999999999999,-1.2599999999999998],[7.808000000000002,-1.4400000000000002],[8.856,-1.0799999999999998],[10,0]], 3)
  );
  test.end()
});

tape("cubic(a, b, offset) returns accepts offsets", test => {
  test.deepEqual(
    round(swoopy.cubic([0, 0], [10, 0], -.5), 3),
    round([[0,0],[1.1440000000000001,-1.0800000000000003],[2.1920000000000006,-1.4400000000000004],[3.1679999999999993,-1.2599999999999996],[4.096,-0.72],[5,0],[5.904,0.72],[6.831999999999999,1.2599999999999998],[7.808000000000002,1.4400000000000002],[8.856,1.0799999999999998],[10,0]], 3)
  )
  test.deepEqual(
    round(swoopy.cubic([0, 0], [10, 0], 0), 3),
    round([[0,0],[1.1440000000000003,0],[2.1920000000000006,0],[3.1679999999999997,0],[4.096,0],[5,0],[5.904,0],[6.831999999999999,0],[7.808000000000002,0],[8.856,0],[10,0]], 3)
  );
  test.deepEqual(
    round(swoopy.cubic([0, 0], [10, 0], 1), 3),
    round([[0,0],[1.1440000000000006,2.1600000000000006],[2.192000000000001,2.880000000000001],[3.168,2.519999999999999],[4.096000000000002,1.44],[5.000000000000001,0],[5.904,-1.44],[6.832,-2.5199999999999996],[7.808000000000002,-2.8800000000000003],[8.856000000000002,-2.1599999999999997],[10,0]], 3)
  );
  test.deepEqual(
    round(swoopy.cubic([0, 0], [10, 0], -1), 3),
    round([[0,0],[1.1440000000000001,-2.1600000000000006],[2.192,-2.880000000000001],[3.1679999999999993,-2.519999999999999],[4.096,-1.44],[4.999999999999999,0],[5.904,1.44],[6.831999999999999,2.5199999999999996],[7.808000000000001,2.8800000000000003],[8.856,2.1599999999999997],[10,0]], 3)
  );
  test.end();
});
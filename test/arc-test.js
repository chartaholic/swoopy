const tape = require("tape"),
      swoopy = require("../"),
      round = require("./utils/roundArray");

tape("arc(a, b) returns a semicricle from a to b ", test => {
  test.deepEqual(
    round(swoopy.arc([0, 0], [10, 0]), 3),
    round([[0,0],[0.3600000000000003,1.8009000000000004],[1.1466666666666674,3.201600000000001],[2.253333333333334,4.2021],[3.5733333333333346,4.8024000000000004],[5,5.0024999999999995],[6.426666666666668,4.8024000000000004],[7.746666666666666,4.2021],[8.853333333333335,3.2016],[9.64,1.8008999999999997],[10,0]], 3)
  );
  test.end();
});

tape("arc(a, b, offset) accepts offsets", test => {
  test.deepEqual(
    round(swoopy.arc([0, 0], [10, 0], -.5), 3),
    round([[0,0],[0.8600000000000002,-0.9004500000000002],[1.813333333333334,-1.6008000000000004],[2.8366666666666664,-2.10105],[3.9066666666666667,-2.4012000000000002],[5,-2.5012499999999998],[6.093333333333334,-2.4012000000000002],[7.163333333333332,-2.10105],[8.186666666666667,-1.6008],[9.14,-0.9004499999999999],[10,0]], 3)
  );
  test.deepEqual(
    round(swoopy.arc([0, 0], [10, 0], 0), 3),
    round([[0,0],[1.3600000000000003,0],[2.480000000000001,0],[3.4199999999999995,0],[4.24,0],[5,0],[5.76,0],[6.58,0],[7.520000000000001,0],[8.64,0],[10,0]], 3)
  );
  test.deepEqual(
    round(swoopy.arc([0, 0], [10, 0], .5), 3),
    round([[0,0],[0.8600000000000002,0.9004500000000002],[1.813333333333334,1.6008000000000004],[2.8366666666666664,2.10105],[3.9066666666666667,2.4012000000000002],[5,2.5012499999999998],[6.093333333333334,2.4012000000000002],[7.163333333333332,2.10105],[8.186666666666667,1.6008],[9.14,0.9004499999999999],[10,0]], 3)
  );
  test.deepEqual(
    round(swoopy.arc([0, 0], [10, 0], -1), 3),
    round([[0,0],[0.3600000000000001,-1.8009000000000004],[1.1466666666666672,-3.201600000000001],[2.2533333333333334,-4.2021],[3.573333333333334,-4.8024000000000004],[5,-5.0024999999999995],[6.426666666666666,-4.8024000000000004],[7.746666666666666,-4.2021],[8.853333333333335,-3.2016],[9.64,-1.8008999999999997],[10,0]], 3)
  );
  test.end();
});
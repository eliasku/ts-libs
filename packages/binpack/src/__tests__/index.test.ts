import { Method, pack } from '..';

test('common bin pack cases', () => {
  const padding = 2;
  const border = 0;
  const width = 1000;
  const height = 20;

  const result = pack(
    [
      {
        w: width,
        h: height,
        padding,
        data: { myData: true },
      },
    ],
    {
      maxWidth: 2048,
      maxHeight: 2048,
    },
  );

  expect(result.pages.length).toStrictEqual(1);
  expect(result.notPacked.length).toStrictEqual(0);

  // rotate should be passed from input
  expect(result.rotate).toStrictEqual(true);

  expect(result.method).toStrictEqual(Method.All);

  const page = result.pages[0];
  expect(page.w).toStrictEqual(1024);
  expect(page.h).toStrictEqual(512);

  // selected method should be specific
  expect(page.method).not.toStrictEqual(Method.All);

  const rc = page.rects[0];
  expect(rc.x).toStrictEqual(padding + border);
  expect(rc.y).toStrictEqual(padding + border);
  expect(rc.w).toStrictEqual(width);
  expect(rc.h).toStrictEqual(height);
  expect(rc.rotated).toStrictEqual(false);
  expect(rc.data).toBeDefined();
  expect(rc.data.myData).toBeTruthy();
});

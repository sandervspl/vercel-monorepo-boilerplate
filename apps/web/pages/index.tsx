import type * as i from '@project/types';


export default function Web() {
  const foo: i.Foo = 'bar';

  return (
    <div>
      <h1>Web</h1><br />
      {foo}
    </div>
  );
}

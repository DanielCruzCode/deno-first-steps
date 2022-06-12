# Documentation to Deno exported functions

You can use the `deno doc` command, like this:

```bash
$ deno doc https://deno.land/std@0.143.0/http/server.ts serve
# serve function documentation
```

The first param is the absolute path of the dependency, and the second param is the function or property to know its documentation. I leave an example of this command:

> Defined in https://deno.land/std@0.143.0/http/server.ts:572:0
>
> async function serve(handler: Handler, options: ServeInit): Promise<void>
> Serves HTTP requests with the given handler.
>
> You can specify an object with a port and hostname option, which is the
> address to listen on. The default is port 8000 on hostname "0.0.0.0".
>
> The below example serves with the port 8000.
>
> ```ts
> import { serve } from 'https://deno.land/std@$STD_VERSION/http/server.ts';
> serve((_req) => new Response('Hello, world'));
> ```
>
> You can change the listening address by the `hostname` and `port` options.
> The below example serves with the port 3000.
>
> ```ts
> import { serve } from 'https://deno.land/std@$STD_VERSION/http/server.ts';
> serve((_req) => new Response('Hello, world'), { port: 3000 });
> ```
>
> `serve` function prints the message `Listening on http://<hostname>:<port>/`
> on start-up by default. If you like to change this message, you can specify
> `onListen` option to override it.
>
> ```ts
> import { serve } from 'https://deno.land/std@$STD_VERSION/http/server.ts';
> serve((_req) => new Response('Hello, world'), {
> ```

    onListen({ port, hostname }) {
    	console.log(`Server started at http://${hostname}:${port}`);
    	// ... more info specific to your server ..
    },

> });
>
> ````
> You can also specify `undefined` or `null` to stop the logging behavior.
>
> ```ts
> import { serve } from 'https://deno.land/std@$STD_VERSION/http/server.ts';
> serve((_req) => new Response('Hello, world'), { onListen: undefined });
> ````
>
> @param handler
> The handler for individual HTTP requests.
>
> @param options
> The options. See `ServeInit` documentation for details.

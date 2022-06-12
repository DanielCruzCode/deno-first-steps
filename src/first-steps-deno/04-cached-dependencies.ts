import { serve } from './deps.ts';

/**
 * Deno has a command similar to `npm install`, which is `deno cache`
 * this command don't download dependencies in a node_modules pattern
 * like Node, we re download in Deno dir, you can use `deno info` and
 * know the path where cached dependencies are stored in.
 * @command deno cache
 * @param <file> the file to analize
 */
serve((): Response => {
	return new Response('Hello from Deno Server');
}, { port: 8080 });

/**
 * Deno also has a similar feature with NPM, the lock file. This file
 * allow to use the id of a exact version to cache later with a
 * `deno run` or `deno cache` commands. To use the lock advantages you
 * just could create a deps.ts that contains all the dependencies in your
 * project
 *
 * ```bash
 * $ deno cache --lock=lock.json --lock-write deps.ts
 * ```
 * @command deno cache @param <deps.ts> file that contains the dependencies to cache
 * @flag --lock @param <file> to save the locked dependencies
 * @flag --lock-write - Allows writing the lock.json file
 * @return a lock.json file with ID's of each dependencie
 *
 * Ex:
 * {
    "https://deno.land/std@0.143.0/async/abortable.ts": "87aa7230be8360c24ad437212311c9e8d4328854baec27b4c7abb26e85515c06",
    "https://deno.land/std@0.143.0/async/deadline.ts": "48ac998d7564969f3e6ec6b6f9bf0217ebd00239b1b2292feba61272d5dd58d0",
    "https://deno.land/std@0.143.0/async/debounce.ts": "564273ef242bcfcda19a439132f940db8694173abffc159ea34f07d18fc42620",
    "https://deno.land/std@0.143.0/async/deferred.ts": "bc18e28108252c9f67dfca2bbc4587c3cbf3aeb6e155f8c864ca8ecff992b98a",
    "https://deno.land/std@0.143.0/async/delay.ts": "cbbdf1c87d1aed8edc7bae13592fb3e27e3106e0748f089c263390d4f49e5f6c",
    "https://deno.land/std@0.143.0/async/mod.ts": "6e42e275b44367361a81842dd1a789c55ab206d7c8a877d7163ab5c460625be6",
    "https://deno.land/std@0.143.0/async/mux_async_iterator.ts": "5b4aca6781ad0f2e19ccdf1d1a1c092ccd3e00d52050d9c27c772658c8367256",
    "https://deno.land/std@0.143.0/async/pool.ts": "ef9eb97b388543acbf0ac32647121e4dbe629236899586c4d4311a8770fbb239",
    "https://deno.land/std@0.143.0/async/tee.ts": "bcfae0017ebb718cf4eef9e2420e8675d91cb1bcc0ed9b668681af6e6caad846",
    "https://deno.land/std@0.143.0/http/server.ts": "0b0a9f3abfcfecead944b31ee9098a0c11a59b0495bf873ee200eb80e7441483"
  }

 * */

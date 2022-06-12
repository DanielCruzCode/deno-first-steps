import { serve } from "https://deno.land/std@0.143.0/http/server.ts";

/**
 * Deno has a command similar to `npm install`, which is `deno cache`
 * this command don't download dependencies in a node_modules pattern
 * like Node, we re download in Deno dir, you can use `deno info` and
 * know the path where cached dependencies are stored in.
 * @command deno cache
 * @param <file> the file to analize
 */
serve(
  (): Response => {
    return new Response("Hello from Deno Server");
  },
  { port: 8080 }
);

/**
 * Deno also has a similar feature with NPM, the lock file. This file
 * allow to use the id of a exact version to cache later with a
 * `deno run` or `deno cache` commands. To use the lock advantages you
 * just could create a deps.ts that contains all the dependencies in your
 * project
 * */

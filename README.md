# site

A static website Template for [Basemodo](https://basemodo.com): Astro and Tailwind, built to plain files.

```sh
bun create basemodocom/site my-site
cd my-site
bun run dev        # http://localhost:4321
basemodo deploy    # build and publish; prints the address
```

## The commit Basemodo serves

Basemodo starts new Apps from this Template (`basemodo deploy --template site`) and gives its files to agents (`basemodo files --template site`) at a commit Basemodo pins, not at the head of `main`: a push here reaches new Apps once the pull request that pins it is merged in Basemodo, which `.github/workflows/pin.yml` opens on every push. `basemodo files --template site` names the commit it serves on its first line (`The site Template (basemodocom/site at <commit>)`), and its `--json` as `template.commit`. In a clone of this repository, `git log -1 --format=%H` is the clone's. When the two differ, the code an App starts from is the pinned commit's, and `git checkout <commit>` shows it.

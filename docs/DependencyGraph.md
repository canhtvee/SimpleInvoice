## Philosophy

- The folder structures is organized to promote `view-centric` architecture applications
- Applications contains only `views` and `views's dependencies`
- All application building blocks are JS modules. Every JS modules could contains both `views` and `views's dependencies`
- Application dependency graph is the dependency graph of all JS modules

## Dependency graph

The dependency between JS modules need to adhere to the below rules strictly as application growth, circular dependencies are prohibited.

1. `utils` contains base JS modules, not handle `view` in `utils` it has no dependencies
2. `commons` contains common JS modules, they depend on `utils`
   - `commons's childs` depend on `utils`
   - `common module and it's siblings` may depend on each other
3. `screens` contains screens of application, they depend on `commons` and `utils`
   - `screens's childs` depend on `commons` and `utils`
   - `screen and it's siblings` may depend on each other
4. `containers` depends on `screens`, `commons`, and `utils`

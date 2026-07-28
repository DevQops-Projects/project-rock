## Common Pitfall: Module Shadowing

Avoid naming your Python modules the same as modules from the Python Standard Library.

Examples:

- logging.py
- json.py
- typing.py
- pathlib.py
- random.py

Python resolves imports by searching your project before the standard library. If a local module has the same name, it shadows the built-in module and can lead to circular imports or missing attributes.

### Example

Naming a file `logging.py` caused Python to import the project's module instead of the standard library `logging` module, resulting in:

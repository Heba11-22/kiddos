# We are creating a command to type on the terminal to seed...
# flask doesn't have a command for seeding.

from flask.cli import AppGroup
from .users import seed_users, undo_users
from .photos import seed_photos, undo_photos
from .mainCategories import seed_mainCategories, undo_mainCategories
from .categories import seed_categories, undo_categories
from .items import seed_items, undo_items
from .carts import seed_carts, undo_carts

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_photos()
    seed_items()
    seed_carts()
    seed_mainCategories()
    seed_categories()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_photos()
    undo_items()
    undo_carts()
    undo_mainCategories()
    undo_categories()
    # Add other undo functions here

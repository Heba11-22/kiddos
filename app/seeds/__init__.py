# We are creating a command to type on the terminal to seed...
# flask doesn't have a command for seeding.

from flask.cli import AppGroup
from app.models import Items, Sizes
from .users import seed_users, undo_users
from .photos import seed_photos, undo_photos
from .mainCategories import seed_mainCategories, undo_mainCategories
from .categories import seed_categories, undo_categories
from .items import seed_items, undo_items
from .sizes import seed_sizes, undo_sizes
from .carts import seed_carts, undo_carts
from .useritems import seed_user_items, undo_user_items
# from .savedItems import seed_savedItems, undo_savedItems

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('test')
def seed_item_sizes():
    seed_sizes()


# @seed_commands.command('test')
# def seed_user_items():
#     seed_users()


@seed_commands.command('all')
def seed():
    seed_mainCategories()
    seed_users()
    seed_photos()
    seed_categories()
    # seed_items()
    seed_sizes()
    seed_carts()
    seed_user_items()
    # seed_savedItems()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_savedItems()
    undo_carts()
    undo_sizes()
    # undo_items()
    undo_categories()
    undo_photos()
    undo_users()
    undo_mainCategories()
    undo_user_items()
    # Add other undo functions here

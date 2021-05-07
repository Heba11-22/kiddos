from flask import Blueprint
from app.models import db, MainCategories


maincategories_routes = Blueprint('maincategories', __name__)


# Route for getting all of the categories:
@maincategories_routes.route('/')
def get_maincategories():
    maincategories = MainCategories.query.all()
    print("++++++", [maincategory.to_dict() for maincategory in maincategories])
    return {"maincategories": [maincategory.to_dict() for maincategory in maincategories]}
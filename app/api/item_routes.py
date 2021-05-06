from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Items
import json

item_routes = Blueprint('items', __name__)


# Route for getting all of the items:     >>>>>>>>>>> For now
@item_routes.route('/')
def get_items():
    items = Items.query.all()
    print("++++++++++++++++++", [item.to_dict() for item in items])
    return {"items": [item.to_dict() for item in items]}


# route for getting a single item:
@item_routes.route('/<int:id>')
def get_single_item(id):
    item = Items.query.get(id)
    return {"item": item.to_dict()}

from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Items, SavedItems
import json

saved_items_routes = Blueprint('comments', __name__)


# Route for getting all the saved items for a user:

@saved_items_routes.route('/<int:id>')
@login_required
def get_savedItems(id):
    savedItems = SavedItems.query.filter_by(userId=current_user.id).all()
    print(">>>>>>>><<<<<<<<<<<<", savedItems)
    return {"items": [savedItem.to_dict() for savedItem in savedItems]}
from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Items, User, Carts
import json

cart_routes = Blueprint('cart', __name__)


# Route for getting the items have been added in the cart:
@cart_routes.route('/')
def get_cart_items():
    items = Carts.query.all()
    return {"items": [item.to_dict() for item in items]}
from fastapi import APIRouter
router = APIRouter(prefix="/bots", tags=["bots"])

@router.get("")
def list_bots():
    # placeholder
    return [{"id": 1, "name": "Demo Bot", "broker": "binance", "status": "stopped"}]

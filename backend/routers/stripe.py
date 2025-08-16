import os, stripe
from fastapi import APIRouter, Request, HTTPException

router = APIRouter(prefix="/stripe", tags=["stripe"])
stripe.api_key = os.getenv("STRIPE_SECRET_KEY", "")

@router.post("/webhook")
async def webhook(request: Request):
    payload = await request.body()
    sig = request.headers.get("stripe-signature")
    secret = os.getenv("STRIPE_WEBHOOK_SECRET", "")
    try:
        event = stripe.Webhook.construct_event(payload, sig, secret) if secret else None
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    # TODO: handle subscription events
    return {"ok": True}

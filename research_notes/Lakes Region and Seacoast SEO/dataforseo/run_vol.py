import json,sys,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from dfs import post
kws = """mobile bartending lakes region nh
mobile bar lakes region nh
lakes region nh wedding
lakes region wedding venues
lakes region nh wedding venues
lake winnipesaukee wedding
lake winnipesaukee wedding venues
winnipesaukee wedding
winnipesaukee wedding venues
lake winnipesaukee events
lake house wedding nh
lake wedding nh
nh lake wedding venues
laconia nh wedding venues
meredith nh wedding venues
gilford nh wedding venues
wolfeboro nh wedding venues
wolfeboro wedding
meredith nh wedding
bartender laconia nh
bartender meredith nh
bartender wolfeboro nh
mobile bartending laconia nh
mobile bar laconia nh
mobile bartender meredith nh
mobile bartending wolfeboro nh
mobile bartending gilford nh
seacoast nh wedding
seacoast nh wedding venues
nh seacoast wedding venues
seacoast wedding venues
portsmouth nh wedding venues
portsmouth nh wedding
portsmouth wedding venues
rye nh wedding
rye nh wedding venues
hampton nh wedding venues
hampton beach wedding
exeter nh wedding venues
dover nh wedding venues
new castle nh wedding venues
nh beach wedding
beach wedding new hampshire
mobile bartending portsmouth nh
mobile bar portsmouth nh
bartender portsmouth nh
mobile bartending seacoast nh
mobile bartender seacoast nh
mobile bartending dover nh
mobile bartending exeter nh
mobile bartending rye nh
mobile bartending hampton nh
bartender for hire portsmouth nh
wedding bartender portsmouth nh
wedding bartender nh
bartending services nh
mobile bartending new hampshire
mobile bar rental nh
byob wedding venues nh
byob bartender nh
backyard wedding nh
lake winnipesaukee bachelorette
portsmouth nh bachelorette
portsmouth nh rehearsal dinner
mobile bartending maine
mobile bar nh""".strip().split("\n")
out={}
for loc in ["New Hampshire,United States","United States"]:
    r=post("keywords_data/google_ads/search_volume/live",[{"keywords":kws,"location_name":loc,"language_code":"en"}])
    t=r['tasks'][0]
    print(loc,'cost',t.get('cost'),t.get('status_message'))
    out[loc]={x['keyword']:[x.get('search_volume'),x.get('cpc'),x.get('competition')] for x in (t.get('result') or [])}
json.dump(out,open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'volumes_regional.json'),'w'),indent=1)
nh=out["New Hampshire,United States"]; us=out["United States"]
for k in kws:
    print(f"{k:45s} NH={nh.get(k,[None])[0]}  US={us.get(k,[None])[0]}  cpc={nh.get(k,[None,None])[1]}")

import json,sys,os
D=os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0,D)
from dfs import post
qs=[("mobile bartending","Laconia,New Hampshire,United States"),
    ("wedding bartender","Meredith,New Hampshire,United States"),
    ("mobile bartending lakes region nh","New Hampshire,United States"),
    ("mobile bar","Portsmouth,New Hampshire,United States"),
    ("mobile bartending seacoast nh","New Hampshire,United States"),
    ("wedding bartender","Portsmouth,New Hampshire,United States")]
out={}; total=0
for q,loc in qs:
    r=post("serp/google/organic/live/advanced",[{"keyword":q,"location_name":loc,"language_code":"en","depth":20}])
    t=r['tasks'][0]; total+=t.get('cost') or 0
    print("##",q,"@",loc,t.get('status_message'))
    items=((t.get('result') or [{}])[0].get('items')) or []
    out[f"{q} @ {loc}"]=items
    for it in items:
        if it['type']=='organic': print('  ',it.get('rank_group'),it.get('url'),'|',(it.get('title') or '')[:70])
        elif it['type']=='local_pack': print('  LP',it.get('title'),it.get('url'),(it.get('rating') or {}).get('value'),(it.get('rating') or {}).get('votes_count'),'|',(it.get('description') or '').split('\n')[0])
        else: print('  [',it['type'],']')
json.dump(out,open(os.path.join(D,'serps_regional.json'),'w'))
print('total cost',total)

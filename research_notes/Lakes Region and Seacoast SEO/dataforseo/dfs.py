import json, sys, base64, urllib.request
def creds():
    d=json.load(open('/Users/wyattbensman/.claude.json'))
    env=d['mcpServers']['dataforseo']['env']
    u=env.get('DATAFORSEO_USERNAME') or env.get('DATAFORSEO_LOGIN'); p=env.get('DATAFORSEO_PASSWORD')
    return u,p
def post(path, payload):
    u,p=creds()
    req=urllib.request.Request("https://api.dataforseo.com/v3/"+path, data=json.dumps(payload).encode(),
        headers={"Authorization":"Basic "+base64.b64encode(f"{u}:{p}".encode()).decode(),"Content-Type":"application/json"})
    return json.load(urllib.request.urlopen(req, timeout=120))
if __name__=="__main__":
    print(sorted(json.load(open('/Users/wyattbensman/.claude.json'))['mcpServers']['dataforseo']['env'].keys()))

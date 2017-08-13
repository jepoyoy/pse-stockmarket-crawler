import json
with open('sample_dfnn.json') as f:
    events = json.load(f)
    event = max(events['chartData'], key=lambda ev: ev['CLOSE'])
    print event
import json, pprint, pandas as p
content = None
# Get the excel file
df = p.DataFrame(p.read_excel('./meetingEvenFreeLancing.xlsx',sheet_name=1)).values.tolist()

# Convert it to 2 JSON files, 1. Party -> Category  2. Category -> Cost Parameters
p_to_c, c_to_cp = {}, {}
for r in df:
    # Party -> Category
    for j in r[1].split(','):   p_to_c[j.strip()] = r[0]
    # Category -> Cost parameters
    c_to_cp[r[0]] = [i.strip() for i in r[2].split(',')]

# Writing into JSON files.
with open('Party to Category.json','w') as f1, open('Category to Cost Factors.json','w') as f2:
    f1.write(json.dumps(p_to_c))
    f2.write(json.dumps(c_to_cp))

import json

# Extract the cost parameters
data = None
with open('./meetings_data.json') as f:
    data = json.loads(f.read())

# Get the lower circuit
def get_lower_circuit(d):
    if isinstance(d,str):
        # Split the String
        d = d.split()
        # Consider the value with 
        res = None
        for i in d:
            if i[0].isnumeric():
                if '-' in i:
                    # If there's a hyphen, extract the lower bound of the range
                    lower_bound = i.split('-')[0]
                    return int(lower_bound.replace(',', ''))
                else:
                    # If there's no hyphen, simply return the numeric value
                    return int(i.replace(',', ''))
        return 10000
    
    # Recursively call
    for k,v in d.items():
        d[k] = get_lower_circuit(v)
    return d

# Final results to CostFactors_to_Cost.json
data = get_lower_circuit(data)
with open('Cost Factors to Cost.json','w') as f:
    f.write(json.dumps(data))

minimas = [0] * 5
maximas = [0] * 5
acumMinimas = 0
acumMaximas = 0
tempMax = maximas[0]

for i in range(len(minimas)):
   
    print(f"Ingreso temperaturas día {i + 1}")
    minimas[i] = float(input("Ingrese temperatura minima: "))
    acumMinimas = acumMinimas + minimas[i]
    maximas[i] = float(input("Ingrese temperatura maxima: "))
    acumMaximas = acumMaximas + maximas[i]
    
    if tempMax <= maximas[i]:
        tempMax = maximas[i]
        tempMin = min(minimas)

promedioMinimas = acumMinimas / len(minimas)
promedioMaximas = acumMaximas / len(maximas)

print(f"Temperaturas mínimas: {minimas}")
print(f"Temperaturas máximas: {maximas}")
print(f"Promedio de temperaturas mínimas: {promedioMinimas}")
print(f"Promedio de temperaturas máximas: {promedioMaximas}")
print(f"Temperatura más baja: {tempMin}")
print(f"Temperatura más alta: {tempMax}")

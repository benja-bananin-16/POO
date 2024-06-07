temperaturas = []
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]


for dia in dias:
    temperatura = float(input(f"Ingrese la temperatura del {dia}: "))
    temperaturas.append(temperatura)


mayor = max(temperaturas)
menor = min(temperaturas)

dia_mayor = dias[temperaturas.index(mayor)]
dia_menor = dias[temperaturas.index(menor)]

# Imprimimos los resultados
print(f"Temperaturas ingresadas: {temperaturas}")
print(f"Valor mayor: {mayor:.2f}°C (el {dia_mayor})")
print(f"Valor menor: {menor:.2f}°C (el {dia_menor})")
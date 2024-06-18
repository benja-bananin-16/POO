cantidadNotas = int(input("Cuantas notas deseas agregar?: "))
notas = [0] * cantidadNotas

for i in range(0,cantidadNotas,1):
    notas[i] = float(input(f'Ingrese nota {i+1}: '))
else:
    print('Finalización lectura de notas...')
    
acumNotas = 0    
for i in range(len(notas)):
    acumNotas = acumNotas + notas[i]
    
promedio = acumNotas / len(notas)

print(f'Promedio Notas: {promedio}')
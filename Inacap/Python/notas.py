def calcular_promedio_y_resultado():
    while True:
            num_notas = int(input("Ingrese la cantidad de notas: "))
            break
    
    notas = []

    for i in range(num_notas):
        while True:
            try:
                nota = float(input(f"Ingresa la nota {i+1} (entre 1 y 7): "))
                if 1 <= nota <= 7:
                    notas.append(nota)
                    break
            except ValueError:
                print("Entrada inválida. Por favor, ingresa un número entre 1 y 7.")
    
    promedio = sum(notas) / len(notas)
    print(f"El promedio de las notas es: {promedio:}")
    return promedio

calcular_promedio_y_resultado()

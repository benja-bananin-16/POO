notas = []
for i in range(5):
    while True:
        nota = float(input(f"Ingrese la nota {i+1} (entre 1 y 7): "))
        if 1 <= nota <= 7:
            notas.append(nota)
            break
        print("La nota debe estar entre 1 y 7. Inténtalo de nuevo.")

promedio = sum(notas) / len(notas)
resultado = "aprueba" if promedio >= 4 else "reprueba"
print(f"El promedio de las notas es: {promedio:.1f} El alumno {resultado}")

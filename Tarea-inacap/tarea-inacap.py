def solicitar_datos_alumnos():
    alumnos = []
    while True:
        nombre = input("Ingrese el nombre del alumno (o 'fin' para terminar): ")
        if nombre.lower() == 'fin':
            break
        while True:
            try:
                promedio = float(input(f"Ingrese el promedio final de {nombre} (entre 1 y 7): "))
                if 1 <= promedio <= 7:
                    alumnos.append((nombre, promedio))
                    break
                else:
                    print("El promedio debe estar entre 1 y 7. Intente nuevamente.")
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número.")
    return alumnos

def determinar_situacion(promedio):
    if promedio >= 4.0:
        return "APROBADO"
    else:
        return "REPROBADO"

def calcular_promedio_curso(alumnos):
    total_promedio = sum(promedio for _, promedio in alumnos)
    return total_promedio / len(alumnos)

def contar_aprobados_reprobados(alumnos):
    aprobados = sum(1 for _, promedio in alumnos if promedio >= 4.0)
    reprobados = len(alumnos) - aprobados
    return aprobados, reprobados

def main():
    alumnos = solicitar_datos_alumnos()
    if not alumnos:
        print("No se ingresaron datos de alumnos.")
        return

    print("\nResultados por alumno:")
    for nombre, promedio in alumnos:
        situacion = determinar_situacion(promedio)
        print(f"Alumno: {nombre}, Promedio: {promedio:.2f}, Situación: {situacion}")

    promedio_curso = calcular_promedio_curso(alumnos)
    aprobados, reprobados = contar_aprobados_reprobados(alumnos)

    print(f"\nPromedio del curso: {promedio_curso:.2f}")
    print(f"Alumnos aprobados: {aprobados}")
    print(f"Alumnos reprobados: {reprobados}")

if __name__ == "__main__":
    main()

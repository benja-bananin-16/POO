def determinar_estado(promedio):
    return "APROBADO" if promedio >= 4 else "REPROBADO"

def main():
    alumnos = []
    while True:
        nombre = input("Nombre del alumno (o 'fin' para terminar): ")
        if nombre.lower() == 'fin':
            break
        promedio = float(input(f"Promedio final de {nombre}: "))
        estado = determinar_estado(promedio)
        alumnos.append((nombre, promedio, estado))
        print(f"{nombre} - Promedio: {promedio}, Estado: {estado}")
    
    promedios = [alumno[1] for alumno in alumnos]
    promedio_curso = sum(promedios) / len(alumnos)
    aprobados = sum(1 for alumno in alumnos if alumno[2] == "APROBADO")
    reprobados = len(alumnos) - aprobados
    
    print(f"\nPromedio del curso: {promedio_curso}")
    print(f"Aprobados: {aprobados}, Reprobados: {reprobados}")

if __name__ == "__main__":
    main()

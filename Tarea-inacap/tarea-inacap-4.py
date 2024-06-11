def solicitar_notas():
    notas = []
    for i in range(5):
        while True:
            nota = float(input(f"Ingresa la nota {i+1} (entre 1 y 7): "))
            if 1 <= nota <= 7:
                notas.append(nota)
                break
            else:
                print("Nota inválida. Por favor, ingresa una nota entre 1 y 7.")
    return notas

def calcular_promedio(notas):
    return sum(notas) / len(notas)

def determinar_resultado(promedio):
    if promedio >= 4:
        return "Aprobado"
    else:
        return "Reprobado"

def main():
    notas = solicitar_notas()
    promedio = calcular_promedio(notas)
    resultado = determinar_resultado(promedio)
    print(f"Promedio: {promedio:.2f}")
    print(f"Resultado: {resultado}")

if __name__ == "__main__":
    main()
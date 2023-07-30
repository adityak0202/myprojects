def outputPuzzle(a):

    print("-------------------------------")
    print("|         |         |         |")
    print("|    " + str(a[0][0]) + "    |    " + str(a[0][1]) + "    |    " + str(a[0][2]) + "    |")
    print("|         |         |         |")
    print("-------------------------------")

    print("|         |         |         |")
    print("|    " + str(a[1][0]) + "    |    " + str(a[1][1]) + "    |    " + str(a[1][2]) + "    |")
    print("|         |         |         |")
    print("-------------------------------")

    print("|         |         |         |")
    print("|    " + str(a[2][0]) + "    |    " + str(a[2][1]) + "    |    " + str(a[2][2]) + "    |")
    print("|         |         |         |")
    print("-------------------------------")

def inputPuzzle(arr):
    print("Puzzle pieces:")
    for i in range(3):
        for j in range(3):
            arr[i][j] = input()

def slide(arr):
    n = int(input("Slide Number:"))
    for i in arr:
        for j in i:
            if j == n:
                print("Element found!")
                x1 = arr.index(i)
                x2 = i.index(n)

    
                
    for i in arr:
        for j in i:
            if j == " ":
                y1 = arr.index(i)
                y2 = i.index(" ")
    
    if (((y2 == x2 + 1) or (y2 == x2 - 1)) and x1 == y1) or (((y1 == x1 + 1) or (y1 == x1 - 1)) and x2 == y2):
        temp = arr[x1][x2]
        arr[x1][x2] = arr[y1][y2]
        arr[y1][y2] = temp
                
puzzle = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, " "]]


outputPuzzle(puzzle)


# ch = 1
while(1):
    slide(puzzle)
    outputPuzzle(puzzle)
    # ch = input("Switch? (1/0)")

    

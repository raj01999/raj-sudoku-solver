import { useState } from "react";
import "./App.css";

function App() {
  const [r1c1, setR1C1] = useState("")
  const [r1c2, setR1C2] = useState("")
  const [r1c3, setR1C3] = useState("")
  const [r1c4, setR1C4] = useState("")
  const [r1c5, setR1C5] = useState("")
  const [r1c6, setR1C6] = useState("")
  const [r1c7, setR1C7] = useState("")
  const [r1c8, setR1C8] = useState("")
  const [r1c9, setR1C9] = useState("")

  const [r2c1, setR2C1] = useState("")
  const [r2c2, setR2C2] = useState("")
  const [r2c3, setR2C3] = useState("")
  const [r2c4, setR2C4] = useState("")
  const [r2c5, setR2C5] = useState("")
  const [r2c6, setR2C6] = useState("")
  const [r2c7, setR2C7] = useState("")
  const [r2c8, setR2C8] = useState("")
  const [r2c9, setR2C9] = useState("")

  const [r3c1, setR3C1] = useState("")
  const [r3c2, setR3C2] = useState("")
  const [r3c3, setR3C3] = useState("")
  const [r3c4, setR3C4] = useState("")
  const [r3c5, setR3C5] = useState("")
  const [r3c6, setR3C6] = useState("")
  const [r3c7, setR3C7] = useState("")
  const [r3c8, setR3C8] = useState("")
  const [r3c9, setR3C9] = useState("")

  const [r4c1, setR4C1] = useState("")
  const [r4c2, setR4C2] = useState("")
  const [r4c3, setR4C3] = useState("")
  const [r4c4, setR4C4] = useState("")
  const [r4c5, setR4C5] = useState("")
  const [r4c6, setR4C6] = useState("")
  const [r4c7, setR4C7] = useState("")
  const [r4c8, setR4C8] = useState("")
  const [r4c9, setR4C9] = useState("")

  const [r5c1, setR5C1] = useState("")
  const [r5c2, setR5C2] = useState("")
  const [r5c3, setR5C3] = useState("")
  const [r5c4, setR5C4] = useState("")
  const [r5c5, setR5C5] = useState("")
  const [r5c6, setR5C6] = useState("")
  const [r5c7, setR5C7] = useState("")
  const [r5c8, setR5C8] = useState("")
  const [r5c9, setR5C9] = useState("")

  const [r6c1, setR6C1] = useState("")
  const [r6c2, setR6C2] = useState("")
  const [r6c3, setR6C3] = useState("")
  const [r6c4, setR6C4] = useState("")
  const [r6c5, setR6C5] = useState("")
  const [r6c6, setR6C6] = useState("")
  const [r6c7, setR6C7] = useState("")
  const [r6c8, setR6C8] = useState("")
  const [r6c9, setR6C9] = useState("")

  const [r7c1, setR7C1] = useState("")
  const [r7c2, setR7C2] = useState("")
  const [r7c3, setR7C3] = useState("")
  const [r7c4, setR7C4] = useState("")
  const [r7c5, setR7C5] = useState("")
  const [r7c6, setR7C6] = useState("")
  const [r7c7, setR7C7] = useState("")
  const [r7c8, setR7C8] = useState("")
  const [r7c9, setR7C9] = useState("")

  const [r8c1, setR8C1] = useState("")
  const [r8c2, setR8C2] = useState("")
  const [r8c3, setR8C3] = useState("")
  const [r8c4, setR8C4] = useState("")
  const [r8c5, setR8C5] = useState("")
  const [r8c6, setR8C6] = useState("")
  const [r8c7, setR8C7] = useState("")
  const [r8c8, setR8C8] = useState("")
  const [r8c9, setR8C9] = useState("")

  const [r9c1, setR9C1] = useState("")
  const [r9c2, setR9C2] = useState("")
  const [r9c3, setR9C3] = useState("")
  const [r9c4, setR9C4] = useState("")
  const [r9c5, setR9C5] = useState("")
  const [r9c6, setR9C6] = useState("")
  const [r9c7, setR9C7] = useState("")
  const [r9c8, setR9C8] = useState("")
  const [r9c9, setR9C9] = useState("")

  const grid = [
    [Number(r1c1), Number(r1c2), Number(r1c3), Number(r1c4), Number(r1c5), Number(r1c6), Number(r1c7), Number(r1c8), Number(r1c9)],
    [Number(r2c1), Number(r2c2), Number(r2c3), Number(r2c4), Number(r2c5), Number(r2c6), Number(r2c7), Number(r2c8), Number(r2c9)],
    [Number(r3c1), Number(r3c2), Number(r3c3), Number(r3c4), Number(r3c5), Number(r3c6), Number(r3c7), Number(r3c8), Number(r3c9)],
    [Number(r4c1), Number(r4c2), Number(r4c3), Number(r4c4), Number(r4c5), Number(r4c6), Number(r4c7), Number(r4c8), Number(r4c9)],
    [Number(r5c1), Number(r5c2), Number(r5c3), Number(r5c4), Number(r5c5), Number(r5c6), Number(r5c7), Number(r5c8), Number(r5c9)],
    [Number(r6c1), Number(r6c2), Number(r6c3), Number(r6c4), Number(r6c5), Number(r6c6), Number(r6c7), Number(r6c8), Number(r6c9)],
    [Number(r7c1), Number(r7c2), Number(r7c3), Number(r7c4), Number(r7c5), Number(r7c6), Number(r7c7), Number(r7c8), Number(r7c9)],
    [Number(r8c1), Number(r8c2), Number(r8c3), Number(r8c4), Number(r8c5), Number(r8c6), Number(r8c7), Number(r8c8), Number(r8c9)],
    [Number(r9c1), Number(r9c2), Number(r9c3), Number(r9c4), Number(r9c5), Number(r9c6), Number(r9c7), Number(r9c8), Number(r9c9)],
  ]

  const possible = (row, column, number, grid) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === number || grid[i][column] === number) return false;
    }

    let x = parseInt(column / 3) * 3,
      y = parseInt(row / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[y + i][x + j] === number) {
          return false;
        }
      }
    }

    return true;
  }

  const handleChange = (e, crd) => {
    let r = Number(crd[0]) - 1, c = Number(crd[1]) - 1

    if (isNaN(e.target.value)) {
      document.getElementsByTagName("html")[0].style.backgroundColor = "red"
      window.navigator.vibrate(300);
      setTimeout(() => {
        document.getElementsByTagName("html")[0].style.backgroundColor = "white"
      }, 250);
      return false
    }

    if (e.target.value.length > 1 || e.target.value === "0" || e.target.value === " ") {
      document.getElementsByTagName("html")[0].style.backgroundColor = "red"
      window.navigator.vibrate(300);
      setTimeout(() => {
        document.getElementsByTagName("html")[0].style.backgroundColor = "white"
      }, 250);
      return false
    }

    if (e.target.value.length !== 0 && !possible(Number(r), Number(c), Number(e.target.value), grid)) {
      document.getElementsByTagName("html")[0].style.backgroundColor = "red"
      window.navigator.vibrate(300);
      setTimeout(() => {
        document.getElementsByTagName("html")[0].style.backgroundColor = "white"
      }, 250);
      return false
    }

    return true
  }

  // eslint-disable-next-line
  const breaker = 0
  const solve = (grid) => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (grid[r][c] === 0) {
          for (let n = 1; n < 10; n++) {
            if (possible(r, c, n, grid)) {
              grid[r][c] = n;
              solve(grid);
              grid[r][c] = 0;
            }
          }
          return;
        }
      }
    }

    setR1C1(grid[0][0])
    setR1C2(grid[0][1])
    setR1C3(grid[0][2])
    setR1C4(grid[0][3])
    setR1C5(grid[0][4])
    setR1C6(grid[0][5])
    setR1C7(grid[0][6])
    setR1C8(grid[0][7])
    setR1C9(grid[0][8])

    setR2C1(grid[1][0])
    setR2C2(grid[1][1])
    setR2C3(grid[1][2])
    setR2C4(grid[1][3])
    setR2C5(grid[1][4])
    setR2C6(grid[1][5])
    setR2C7(grid[1][6])
    setR2C8(grid[1][7])
    setR2C9(grid[1][8])

    setR3C1(grid[2][0])
    setR3C2(grid[2][1])
    setR3C3(grid[2][2])
    setR3C4(grid[2][3])
    setR3C5(grid[2][4])
    setR3C6(grid[2][5])
    setR3C7(grid[2][6])
    setR3C8(grid[2][7])
    setR3C9(grid[2][8])

    setR4C1(grid[3][0])
    setR4C2(grid[3][1])
    setR4C3(grid[3][2])
    setR4C4(grid[3][3])
    setR4C5(grid[3][4])
    setR4C6(grid[3][5])
    setR4C7(grid[3][6])
    setR4C8(grid[3][7])
    setR4C9(grid[3][8])

    setR5C1(grid[4][0])
    setR5C2(grid[4][1])
    setR5C3(grid[4][2])
    setR5C4(grid[4][3])
    setR5C5(grid[4][4])
    setR5C6(grid[4][5])
    setR5C7(grid[4][6])
    setR5C8(grid[4][7])
    setR5C9(grid[4][8])

    setR6C1(grid[5][0])
    setR6C2(grid[5][1])
    setR6C3(grid[5][2])
    setR6C4(grid[5][3])
    setR6C5(grid[5][4])
    setR6C6(grid[5][5])
    setR6C7(grid[5][6])
    setR6C8(grid[5][7])
    setR6C9(grid[5][8])

    setR7C1(grid[6][0])
    setR7C2(grid[6][1])
    setR7C3(grid[6][2])
    setR7C4(grid[6][3])
    setR7C5(grid[6][4])
    setR7C6(grid[6][5])
    setR7C7(grid[6][6])
    setR7C8(grid[6][7])
    setR7C9(grid[6][8])

    setR8C1(grid[7][0])
    setR8C2(grid[7][1])
    setR8C3(grid[7][2])
    setR8C4(grid[7][3])
    setR8C5(grid[7][4])
    setR8C6(grid[7][5])
    setR8C7(grid[7][6])
    setR8C8(grid[7][7])
    setR8C9(grid[7][8])

    setR9C1(grid[8][0])
    setR9C2(grid[8][1])
    setR9C3(grid[8][2])
    setR9C4(grid[8][3])
    setR9C5(grid[8][4])
    setR9C6(grid[8][5])
    setR9C7(grid[8][6])
    setR9C8(grid[8][7])
    setR9C9(grid[8][8])

    // eslint-disable-next-line
    breaker = 1
  }

  const handleResult = () => {
    solve(grid)
  }

  const handleClear = () => {
    setR1C1("")
    setR1C2("")
    setR1C3("")
    setR1C4("")
    setR1C5("")
    setR1C6("")
    setR1C7("")
    setR1C8("")
    setR1C9("")

    setR2C1("")
    setR2C2("")
    setR2C3("")
    setR2C4("")
    setR2C5("")
    setR2C6("")
    setR2C7("")
    setR2C8("")
    setR2C9("")

    setR3C1("")
    setR3C2("")
    setR3C3("")
    setR3C4("")
    setR3C5("")
    setR3C6("")
    setR3C7("")
    setR3C8("")
    setR3C9("")

    setR4C1("")
    setR4C2("")
    setR4C3("")
    setR4C4("")
    setR4C5("")
    setR4C6("")
    setR4C7("")
    setR4C8("")
    setR4C9("")

    setR5C1("")
    setR5C2("")
    setR5C3("")
    setR5C4("")
    setR5C5("")
    setR5C6("")
    setR5C7("")
    setR5C8("")
    setR5C9("")

    setR6C1("")
    setR6C2("")
    setR6C3("")
    setR6C4("")
    setR6C5("")
    setR6C6("")
    setR6C7("")
    setR6C8("")
    setR6C9("")

    setR7C1("")
    setR7C2("")
    setR7C3("")
    setR7C4("")
    setR7C5("")
    setR7C6("")
    setR7C7("")
    setR7C8("")
    setR7C9("")

    setR8C1("")
    setR8C2("")
    setR8C3("")
    setR8C4("")
    setR8C5("")
    setR8C6("")
    setR8C7("")
    setR8C8("")
    setR8C9("")

    setR9C1("")
    setR9C2("")
    setR9C3("")
    setR9C4("")
    setR9C5("")
    setR9C6("")
    setR9C7("")
    setR9C8("")
    setR9C9("")
  }

  return (
    <>
      <div className="btnDivHead">
        <button class="button-27 btn">Raj Sudoku Solver</button>
      </div>

      <div className="container">
        <div className="parent">
          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r1c1} onChange={(e) => { if (handleChange(e, [1, 1])) setR1C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r1c2} onChange={(e) => { if (handleChange(e, [1, 2])) setR1C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r1c3} onChange={(e) => { if (handleChange(e, [1, 3])) setR1C3(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r1c4} onChange={(e) => { if (handleChange(e, [1, 4])) setR1C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r1c5} onChange={(e) => { if (handleChange(e, [1, 5])) setR1C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r1c6} onChange={(e) => { if (handleChange(e, [1, 6])) setR1C6(e.target.value) }} />
          </span>

          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r1c7} onChange={(e) => { if (handleChange(e, [1, 7])) setR1C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r1c8} onChange={(e) => { if (handleChange(e, [1, 8])) setR1C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r1c9} onChange={(e) => { if (handleChange(e, [1, 9])) setR1C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r2c1} onChange={(e) => { if (handleChange(e, [2, 1])) setR2C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r2c2} onChange={(e) => { if (handleChange(e, [2, 2])) setR2C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r2c3} onChange={(e) => { if (handleChange(e, [2, 3])) setR2C3(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r2c4} onChange={(e) => { if (handleChange(e, [2, 4])) setR2C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r2c5} onChange={(e) => { if (handleChange(e, [2, 5])) setR2C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r2c6} onChange={(e) => { if (handleChange(e, [2, 6])) setR2C6(e.target.value) }} />
          </span>

          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r2c7} onChange={(e) => { if (handleChange(e, [2, 7])) setR2C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r2c8} onChange={(e) => { if (handleChange(e, [2, 8])) setR2C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r2c9} onChange={(e) => { if (handleChange(e, [2, 9])) setR2C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r3c1} onChange={(e) => { if (handleChange(e, [3, 1])) setR3C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r3c2} onChange={(e) => { if (handleChange(e, [3, 2])) setR3C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r3c3} onChange={(e) => { if (handleChange(e, [3, 3])) setR3C3(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r3c4} onChange={(e) => { if (handleChange(e, [3, 4])) setR3C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r3c5} onChange={(e) => { if (handleChange(e, [3, 5])) setR3C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r3c6} onChange={(e) => { if (handleChange(e, [3, 6])) setR3C6(e.target.value) }} />
          </span>

          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r3c7} onChange={(e) => { if (handleChange(e, [3, 7])) setR3C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r3c8} onChange={(e) => { if (handleChange(e, [3, 8])) setR3C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r3c9} onChange={(e) => { if (handleChange(e, [3, 9])) setR3C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r4c1} onChange={(e) => { if (handleChange(e, [4, 1])) setR4C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r4c2} onChange={(e) => { if (handleChange(e, [4, 2])) setR4C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r4c3} onChange={(e) => { if (handleChange(e, [4, 3])) setR4C3(e.target.value) }} />
          </span>

          <span className="child3">
            <input type="text" name="" id="" max={9} min={1} value={r4c4} onChange={(e) => { if (handleChange(e, [4, 4])) setR4C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r4c5} onChange={(e) => { if (handleChange(e, [4, 5])) setR4C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r4c6} onChange={(e) => { if (handleChange(e, [4, 6])) setR4C6(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r4c7} onChange={(e) => { if (handleChange(e, [4, 7])) setR4C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r4c8} onChange={(e) => { if (handleChange(e, [4, 8])) setR4C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r4c9} onChange={(e) => { if (handleChange(e, [4, 9])) setR4C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r5c1} onChange={(e) => { if (handleChange(e, [5, 1])) setR5C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r5c2} onChange={(e) => { if (handleChange(e, [5, 2])) setR5C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r5c3} onChange={(e) => { if (handleChange(e, [5, 3])) setR5C3(e.target.value) }} />
          </span>

          <span className="child3">
            <input type="text" name="" id="" max={9} min={1} value={r5c4} onChange={(e) => { if (handleChange(e, [5, 4])) setR5C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r5c5} onChange={(e) => { if (handleChange(e, [5, 5])) setR5C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r5c6} onChange={(e) => { if (handleChange(e, [5, 6])) setR5C6(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r5c7} onChange={(e) => { if (handleChange(e, [5, 7])) setR5C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r5c8} onChange={(e) => { if (handleChange(e, [5, 8])) setR5C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r5c9} onChange={(e) => { if (handleChange(e, [5, 9])) setR5C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r6c1} onChange={(e) => { if (handleChange(e, [6, 1])) setR6C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r6c2} onChange={(e) => { if (handleChange(e, [6, 2])) setR6C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r6c3} onChange={(e) => { if (handleChange(e, [6, 3])) setR6C3(e.target.value) }} />
          </span>

          <span className="child3">
            <input type="text" name="" id="" max={9} min={1} value={r6c4} onChange={(e) => { if (handleChange(e, [6, 4])) setR6C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r6c5} onChange={(e) => { if (handleChange(e, [6, 5])) setR6C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r6c6} onChange={(e) => { if (handleChange(e, [6, 6])) setR6C6(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r6c7} onChange={(e) => { if (handleChange(e, [6, 7])) setR6C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r6c8} onChange={(e) => { if (handleChange(e, [6, 8])) setR6C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r6c9} onChange={(e) => { if (handleChange(e, [6, 9])) setR6C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r7c1} onChange={(e) => { if (handleChange(e, [7, 1])) setR7C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r7c2} onChange={(e) => { if (handleChange(e, [7, 2])) setR7C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r7c3} onChange={(e) => { if (handleChange(e, [7, 3])) setR7C3(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r7c4} onChange={(e) => { if (handleChange(e, [7, 4])) setR7C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r7c5} onChange={(e) => { if (handleChange(e, [7, 5])) setR7C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r7c6} onChange={(e) => { if (handleChange(e, [7, 6])) setR7C6(e.target.value) }} />
          </span>

          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r7c7} onChange={(e) => { if (handleChange(e, [7, 7])) setR7C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r7c8} onChange={(e) => { if (handleChange(e, [7, 8])) setR7C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r7c9} onChange={(e) => { if (handleChange(e, [7, 9])) setR7C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r8c1} onChange={(e) => { if (handleChange(e, [8, 1])) setR8C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r8c2} onChange={(e) => { if (handleChange(e, [8, 2])) setR8C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r8c3} onChange={(e) => { if (handleChange(e, [8, 3])) setR8C3(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r8c4} onChange={(e) => { if (handleChange(e, [8, 4])) setR8C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r8c5} onChange={(e) => { if (handleChange(e, [8, 5])) setR8C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r8c6} onChange={(e) => { if (handleChange(e, [8, 6])) setR8C6(e.target.value) }} />
          </span>

          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r8c7} onChange={(e) => { if (handleChange(e, [8, 7])) setR8C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r8c8} onChange={(e) => { if (handleChange(e, [8, 8])) setR8C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r8c9} onChange={(e) => { if (handleChange(e, [8, 9])) setR8C9(e.target.value) }} />
          </span>
        </div>

        <div className="parent">
          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r9c1} onChange={(e) => { if (handleChange(e, [9, 1])) setR9C1(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r9c2} onChange={(e) => { if (handleChange(e, [9, 2])) setR9C2(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r9c3} onChange={(e) => { if (handleChange(e, [9, 3])) setR9C3(e.target.value) }} />
          </span>

          <span className="child2">
            <input type="text" name="" id="" max={9} min={1} value={r9c4} onChange={(e) => { if (handleChange(e, [9, 4])) setR9C4(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r9c5} onChange={(e) => { if (handleChange(e, [9, 5])) setR9C5(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r9c6} onChange={(e) => { if (handleChange(e, [9, 6])) setR9C6(e.target.value) }} />
          </span>

          <span className="child1">
            <input type="text" name="" id="" max={9} min={1} value={r9c7} onChange={(e) => { if (handleChange(e, [9, 7])) setR9C7(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r9c8} onChange={(e) => { if (handleChange(e, [9, 8])) setR9C8(e.target.value) }} />
            <input type="text" name="" id="" max={9} min={1} value={r9c9} onChange={(e) => { if (handleChange(e, [9, 9])) setR9C9(e.target.value) }} />
          </span>
        </div>
      </div>
      <div className="btnDiv">
        <button className="button-29 btn" onClick={handleResult}>Get Result</button>
      </div>
      <div className="btnDivClr">
        <button class="button-33 btn" onClick={handleClear} >Clear</button>
      </div>

    </>

  );
}

export default App;

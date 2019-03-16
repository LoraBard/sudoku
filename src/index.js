module.exports = function solveSudoku(matrix) {
  let newArr=matrix,arr1=find_Ziro(newArr);
    if(arr1.length==0)
    {
        return true;
    }
    for(let y=1;y<=9;++y)
    {
        if(function findNumber()
        {
            let Row=3*Math.floor(arr1[0]/3),Col=3*Math.floor(arr1[1]/3);
            for(let k=0;k<9;++k)
            {
                if(newArr[k][arr1[1]]==y||newArr[arr1[0]][k]==y)
                {
                    return false;
                }
            }
            for (let p=Row;p<Row+3;++p)
            {
                for(let s=Col;s<Col+3;++s)
                {
                    if(newArr[p][s]==y) {
                        return false;
                    }
                }
            }
            newArr[arr1[0]][arr1[1]]=y;
            return true;
        }())
        {
            if(solveSudoku(newArr))
            {
                return newArr;
            }
            else
            {
                newArr[arr1[0]][arr1[1]]=0;
            }
        }
    }
}

function find_Ziro(arr)
{
    for(let m=0;m<9;++m) {
        for (let n = 0; n < 9; ++n)
        {
            if (arr[m][n] == 0)
            {
                return [m,n];
            }
        }
    }
    return [];
}

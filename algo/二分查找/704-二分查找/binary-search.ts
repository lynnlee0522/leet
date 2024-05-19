function search (nums: number[], target: number): number {
    let low = 0
    let high = nums.length - 1
    let pos = -1
  
    while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low
  
      if (nums[mid] === target) {
        pos = mid
        break
      } else if (target < nums[mid]) {
        high = mid - 1
      } else if (target > nums[mid]) {
        low = mid + 1
      }
    }
  
    return pos
  }
  
  search([5], 5)
  
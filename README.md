# QuickSort

Quicksort is one of the most useful and powerful sorting algorithms. It is not very difficult to conceptualize. Occasionally JavaScript doesn't mergesort for Array.prototype.sort but it's a variant of quicksort.

It is an divide and conquer, recursive algorithm. Basicly you take the last element in the list and call that the pivot. Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in a "right" list. You then call quick sort on the left and right lists independently (recursivly). After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list (in that order).
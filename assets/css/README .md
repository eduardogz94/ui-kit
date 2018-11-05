## Css components

### Components for the parent (flex container)

> Creates a container of flex elements.
```css
container
container-fluid
```

> Creates a flexbox filled with 12 columns.
```css
row,
```

> Removes the negative margins from .row
```css
no-gutters
```

> Orders the flex elements from left to right.
```css
flex-row, flex-sm-row, flex-md-row, flex-lg-row, flex-xl-row
```

> Orders the flex element from top to bottom.
```css
flex-column, flex-sm-column, flex-md-column, flex-lg-column, flex-xl-column
```

> Orders the flex elements from right to left.
```css
flex-row-reverse, flex-sm-row-reverse, flex-md-row-reverse, flex-lg-row-reverse, flex-xl-row-reverse
```

> Orders the flex elements from bottom to top.
```css
flex-column-reverse, flex-sm-column-reverse, flex-md-column-reverse, flex-lg-column-reverse, flex-xl-column-reverse
```

> Flex items will wrap to the next line, from top to bottom.
```css
flex-wrap, flex-sm-wrap, flex-md-wrap, flex-lg-wrap, flex-xl-wrap.
```

> Flex items won't wrap to the next line.
```css
flex-nowrap, flex-sm-nowrap, flex-md-nowrap, flex-lg-nowrap, flex-xl-nowrap.
```

> Flex items will wrap to the opposite direction, from bottom to top.
```css
flex-wrap-reverse, flex-sm-wrap-reverse, flex-md-wrap-reverse, flex-lg-wrap-reverse, flex-xl-wrap-reverse
```

> The items of a flexbox are packed toward the start line
```css
justify-content-start, justify-content-sm-start, justify-content-md-start, justify-content-lg-start, justify-content-xl-start
```

> The items of a flexbox are packed toward the end line
```css
justify-content-end, justify-content-sm-end, justify-content-md-end, justify-content-lg-end, justify-content-xl-end
```

> The items of a flexbox are centered along the line
```css
justify-content-center, justify-content-sm-center, justify-content-md-center, justify-content-lg-center, justify-content-xl-center
```

> The items of a flexbox are evenly distributed in the line; first item is on the start line, last item on the end line
```css
justify-content-betwen, justify-content-sm-betwen, justify-content-md-betwen, justify-content-lg-betwen, justify-content-xl-betwen
```

> The items of a flexbox are evenly distributed in the line with equal space around them. 
```css
justify-content-around, justify-content-sm-around, justify-content-md-around, justify-content-lg-around, justify-content-xl-around
```

> Cross-start margin edge of the flexbox items is placed on the cross-start line
```css
align-items-start, align-items-sm-start, align-items-md-start, align-items-lg-start, align-items-xl-start,
```

> Cross-end margin edge of the flexbox items is placed on the cross-end line
```css
align-items-end, align-items-sm-end, align-items-md-end, align-items-lg-end, align-items-xl-end
```

> Flex items are centered in the cross-axis
```css
align-items-center, align-items-sm-center, align-items-md-center, align-items-lg-center, align-items-xl-center
```

> Flex items are aligned such as their baselines align
```css
align-items-baseline, align-items-sm-baseline, align-items-md-baseline, align-items-lg-baseline, align-items-xl-baseline
```

> Stretch to fill the container (still respect min-width/max-width)
```css
align-items-stretch, align-items-sm-stretch, align-items-md-stretch, align-items-lg-stretch, align-items-xl-stretch
```

> The lines are packed to the start of the container
```css
align-content-start, align-content-sm-start, align-content-md-start, align-content-lg-start, align-content-xl-start
```

> The lines are packed to the end of the container
```css
align-content-end, align-content-sm-end, align-content-md-end, align-content-lg-end, align-content-xl-end
```

> The lines are packed to the center of the container
```css
align-content-center, align-content-sm-center, align-content-md-center, align-content-lg-center, align-content-xl-center
```

> The lines are evenly distributed; the first line is at the start of the container while the last one is at the end
```css
align-content-between, align-content-sm-between, align-content-md-between, align-content-lg-between, align-content-xl-between
```

> The lines are evenly distributed with equal space around each line
```css
align-content-around, align-content-sm-around, align-content-md-around, align-content-lg-around, align-content-xl-around
```

> The lines are stretch to take up the remaining space
```css
align-content-stretch, align-content-sm-stretch, align-content-md-stretch, align-content-lg-stretch, align-content-xl-stretch
```

### Components for the childrens (flex elements)

> Set the width to auto, and removes the padding on the column.
```css
col-auto, sm-auto, md-auto, lg-auto, xl-auto
```

> The item with this class will ocupate every available column spaces
```css
col
```

> Removes the horizontal padding from a children element
```css
col-
```

> Creates a column inside a flexbox with a total of 12 columns. The number nex to "col-" indicates how many column spaces will ocupate the column, the colums can be of a small size "sm", medium size "md", large size "lg", or extra-large size "xl".
```css
col-1, col-2, col-3, col-4, col-5, col-6, col-7, col-8, col-9, col-10, col-11, col-12

sm-1, sm-2, sm-3, sm-4, sm-5, sm-6, sm-7, sm-8, sm-9, sm-10, sm-11, sm-12, sm

md-1, md-2, md-3, md-4, md-5, md-6, md-7, md-8, md-9, md-10, md-11, md-12, md

lg-1, lg-2, lg-3, lg-4, lg-5, lg-6, lg-7, lg-8, lg-9, lg-10, lg-11, lg-12, lg

xl-1, xl-2, xl-3, xl-4, xl-5, xl-6, xl-7, xl-8, xl-9, xl-10, xl-11, xl-12, xl
```

> Sets an element of a flexbox on the first position.
```css
order-first, order-sm-first, order-md-first, order-lg-first, order-xl-first
```

> Sets an element of a flexbox on the last position.
```css
order-last, order-sm-last, order-md-last, order-lg-last, order-xl-last
```

> Skips the ammount of column spaces equal to the number nex to "offset-", also, it can be of diferent sizes.
```css
offset-1, offset-2, offset-3, offset-4, offset-5, offset-6, offset-7, offset-8, offset-9, offset-10, offset-11, offset-12

offset-sm-1, offset-sm-2, offset-sm-3, offset-sm-4, offset-sm-5, offset-sm-6, offset-sm-7, offset-sm-8, offset-sm-9, offset-sm-10, offset-sm-11, offset-sm-12

offset-md-1, offset-md-2, offset-md-3, offset-md-4, offset-md-5, offset-md-6, offset-md-7, offset-md-8, offset-md-9, offset-md-10, offset-md-11, offset-md-12

offset-lg-1, offset-lg-2, offset-lg-3, offset-lg-4, offset-lg-5, offset-lg-6, offset-lg-7, offset-lg-8, offset-lg-9, offset-lg-10, offset-lg-11, offset-lg-12

offset-xl-1, offset-xl-2, offset-xl-3, offset-xl-4, offset-xl-5, offset-xl-6, offset-xl-7, offset-xl-8, offset-xl-9, offset-xl-10, offset-xl-11, offset-xl-12
```

> The item with this class will fill the remaining column spaces.
```css
flex-fill, flex-sm-fill, flex-md-fill-, flex-lg-fill, flex-xl-fill
```

> This defines the ability for a flex item to grow if necessary, it accepts a value betwen 0 and 1 that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
```css
flex-grow-0, flex-sm-grow-0, flex-md-grow-0, flex-lg-grow-0, flex-xl-grow-0

flex-grow-1, flex-sm-grow-1, flex-md-grow-1, flex-lg-grow-1, flex-xl-grow-1
```

> This defines the ability for a flex item to shrink if necessary.
```css
flex-shrink-0, flex-sm-shrink-0, flex-md-shrink-0, flex-lg-shrink-0, flex-xl-shrink-0

flex-shrink-1, flex-sm-shrink-1, flex-md-shrink-1, flex-lg-shrink-1, flex-xl-shrink-1
```

> The "align-self" property allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
```css
align-self-auto, align-self-sm-auto, align-self-md-auto, align-self-lg-auto, align-self-xl-auto

align-self-start, align-self-sm-start, align-self-md-start, align-self-lg-start, align-self-xl-start

align-self-end, align-self-sm-end, align-self-md-end, align-self-lg-end, align-self-xl-end

align-self-center, align-self-sm-center, align-self-md-center, align-self-lg-center, align-self-xlcenter

align-self-baseline, align-self-sm-baseline, align-self-md-baseline, align-self-lg-baseline, align-self-xl-baseline

align-self-stretch, align-self-sm-stretch, align-self-md-stretch, align-self-lg-stretch, align-self-xl-stretch
```

## Making it responsive

> Sets an element to the right, 
```css
sm-right, md-right, lg-right, xl-right
```

> Doesn't show the element
```css
sm-none, md-none, lg-none, xl-none
```

> Sets an element to the left
```css
sm-left, md-left, lg-left, xl-left
```

> Changes the margin, m-0 = 0 margin, m-1 = 0.25rem margin, m-2 = 0.5 margin, m-3 = 1rem margin, m-4 = 1.5 rem margin, m-5 = 3rem margin
```css
m-sm-0, m-sm-1, m-sm-2, m-sm-3, m-sm-4, m-sm-5

m-md-0, m-md-1, m-md-2, m-md-3, m-md-4, m-md-5

m-lg-0, m-lg-1, m-lg-2, m-lg-3, m-lg-4, m-lg-5

m-xl-0, m-xl-1, m-xl-2, m-xl-3, m-xl-4, m-xl-5
```

> Changes the margin of the top, mt-0 = 0 margin, mt-1 = 0.25rem margin, mt-2 = 0.5 margin, mt-3 = 1rem margin, mt-4 = 1.5 rem margin, mt-5 = 3rem margin
```css
mt-sm-0, mt-sm-1, mt-sm-2, mt-sm-3, mt-sm-4, mt-sm-5

mt-md-0, mt-md-1, mt-md-2, mt-md-3, mt-md-4, mt-md-5

mt-lg-0, mt-lg-1, mt-lg-2, mt-lg-3, mt-lg-4, mt-lg-5

mt-xl-0, mt-xl-1, mt-xl-2, mt-xl-3, mt-xl-4, mt-xl-5
```

> Changes the margin of the top and the bottom, my-0 = 0 margin, my-1 = 0.25rem margin, my-2 = 0.5 margin, my-3 = 1rem margin, my-4 = 1.5 rem margin, my-5 = 3rem margin
```css
my-sm-0, my-sm-1, my-sm-2, my-sm-3, my-sm-4, my-sm-5

my-md-0, my-md-1, my-md-2, my-md-3, my-md-4, my-md-5

my-lg-0, my-lg-1, my-lg-2, my-lg-3, my-lg-4, my-lg-5

my-xl-0, my-xl-1, my-xl-2, my-xl-3, my-xl-4, my-xl-5
```

> Changes the margin of the right, mr-0 = 0 margin, mr-1 = 0.25rem margin, mr-2 = 0.5 margin, mr-3 = 1rem margin, mr-4 = 1.5 rem margin, mr-5 = 3rem margin
```css
mr-sm-0, mr-sm-1, mr-sm-2, mr-sm-3, mr-sm-4, mr-sm-5

mr-md-0, mr-md-1, mr-md-2, mr-md-3, mr-md-4, mr-md-5

mr-lg-0, mr-lg-1, mr-lg-2, mr-lg-3, mr-lg-4, mr-lg-5

mr-xl-0, mr-xl-1, mr-xl-2, mr-xl-3, mr-xl-4, mr-xl-5
```

> Changes the margin of the bottom, mb-0 = 0 margin, mb-1 = 0.25rem margin, mb-2 = 0.5 margin, mb-3 = 1rem margin, mb-4 = 1.5 rem margin, mb-5 = 3rem margin
```css
mb-sm-0, mb-sm-1, mb-sm-2, mb-sm-3, mb-sm-4, mb-sm-5

mb-md-0, mb-md-1, mb-md-2, mb-md-3, mb-md-4, mb-md-5

mb-lg-0, mb-lg-1, mb-lg-2, mb-lg-3, mb-lg-4, mb-lg-5

mb-xl-0, mb-xl-1, mb-xl-2, mb-xl-3, mb-xl-4, mb-xl-5
```

> Changes the margin of the left, ml-0 = 0 margin, ml-1 = 0.25rem margin, ml-2 = 0.5 margin, ml-3 = 1rem margin, ml-4 = 1.5 rem margin, ml-5 = 3rem margin
```css
ml-sm-0, ml-sm-1, ml-sm-2, ml-sm-3, ml-sm-4, ml-sm-5

ml-md-0, ml-md-1, ml-md-2, ml-md-3, ml-md-4, ml-md-5

ml-lg-0, ml-lg-1, ml-lg-2, ml-lg-3, ml-lg-4, ml-lg-5

ml-xl-0, ml-xl-1, ml-xl-2, ml-xl-3, ml-xl-4, ml-xl-5
```

> Changes the margin of the left and the right, mx-0 = 0 margin, mx-1 = 0.25rem margin, mx-2 = 0.5 margin, mx-3 = 1rem margin, mx-4 = 1.5 rem margin, mx-5 = 3rem margin
```css
mx-sm-0, mx-sm-1, mx-sm-2, mx-sm-3, mx-sm-4, mx-sm-5

mx-md-0, mx-md-1, mx-md-2, mx-md-3, mx-md-4, mx-md-5

mx-lg-0, mx-lg-1, mx-lg-2, mx-lg-3, mx-lg-4, mx-lg-5

mx-xl-0, mx-xl-1, mx-xl-2, mx-xl-3, mx-xl-4, mx-xl-5 
```

> Changes the padding, p-0 = 0 padding, p-1 = 0.25rem padding, p-2 = 0.5 padding, p-3 = 1rem padding, p-4 = 1.5 rem padding, p-5 = 3rem padding
```css
p-sm-0, p-sm-1, p-sm-2, p-sm-3, p-sm-4, p-sm-5

p-md-0, p-md-1, p-md-2, p-md-3, p-md-4, p-md-5

p-lg-0, p-lg-1, p-lg-2, p-lg-3, p-lg-4, p-lg-5

p-xl-0, p-xl-1, p-xl-2, p-xl-3, p-xl-4, p-xl-5
```

> Changes the padding of the top, pt-0 = 0 padding, pt-1 = 0.25rem padding, pt-2 = 0.5 padding, pt-3 = 1rem padding, pt-4 = 1.5 rem padding, pt-5 = 3rem padding
```css
pt-sm-0, pt-sm-1, pt-sm-2, pt-sm-3, pt-sm-4, pt-sm-5

pt-md-0, pt-md-1, pt-md-2, pt-md-3, pt-md-4, pt-md-5

pt-lg-0, pt-lg-1, pt-lg-2, pt-lg-3, pt-lg-4, pt-lg-5

pt-xl-0, pt-xl-1, pt-xl-2, pt-xl-3, pt-xl-4, pt-xl-5
```

> Changes the padding of the top and the bottom, py-0 = 0 padding, py-1 = 0.25rem padding, py-2 = 0.5 padding, py-3 = 1rem padding, py-4 = 1.5 rem padding, py-5 = 3rem padding
```
py-sm-0, py-sm-1, py-sm-2, py-sm-3, py-sm-4, py-sm-5

py-md-0, py-md-1, py-md-2, py-md-3, py-md-4, py-md-5

py-lg-0, py-lg-1, py-lg-2, py-lg-3, py-lg-4, py-lg-5

py-xl-0, py-xl-1, py-xl-2, py-xl-3, py-xl-4, py-xl-5
```

> Changes the padding of the right, pr-0 = 0 padding, pr-1 = 0.25rem padding, pr-2 = 0.5 padding, pr-3 = 1rem padding, pr-4 = 1.5 rem padding, pr-5 = 3rem padding
```css
pr-sm-0, pr-sm-1, pr-sm-2, pr-sm-3, pr-sm-4, pr-sm-5

pr-md-0, pr-md-1, pr-md-2, pr-md-3, pr-md-4, pr-md-5

pr-lg-0, pr-lg-1, pr-lg-2, pr-lg-3, pr-lg-4, pr-lg-5

pr-xl-0, pr-xl-1, pr-xl-2, pr-xl-3, pr-xl-4, pr-xl-5
```

> Changes the padding of the left and the right, px-0 = 0 padding, px-1 = 0.25rem padding, px-2 = 0.5 padding, px-3 = 1rem padding, px-4 = 1.5 rem padding, px-5 = 3rem padding
```css
px-sm-0, px-sm-1, px-sm-2, px-sm-3, px-sm-4, px-sm-5

px-md-0, px-md-1, px-md-2, px-md-3, px-md-4, px-md-5

px-lg-0, px-lg-1, px-lg-2, px-lg-3, px-lg-4, px-lg-5

px-xl-0, px-xl-1, px-xl-2, px-xl-3, px-xl-4, px-xl-5
```

> Changes the padding of the bottom, pb-0 = 0 padding, pb-1 = 0.25rem padding, pb-2 = 0.5 padding, pb-3 = 1rem padding, pb-4 = 1.5 rem padding, pb-5 = 3rem padding
```css
pb-sm-0, pb-sm-1, pb-sm-2, pb-sm-3, pb-sm-4, pb-sm-5

pb-md-0, pb-md-1, pb-md-2, pb-md-3, pb-md-4, pb-md-5

pb-lg-0, pb-lg-1, pb-lg-2, pb-lg-3, pb-lg-4, pb-lg-5

pb-xl-0, pb-xl-1, pb-xl-2, pb-xl-3, pb-xl-4, pb-xl-5
```

> Changes the padding of the left, pl-0 = 0 padding, pl-1 = 0.25rem padding, pl-2 = 0.5 padding, pl-3 = 1rem padding, pl-4 = 1.5 rem padding, pl-5 = 3rem padding
```css
pl-sm-0, pl-sm-1, pl-sm-2, pl-sm-3, pl-sm-4, pl-sm-5

pl-md-0, pl-md-1, pl-md-2, pl-md-3, pl-md-4, pl-md-5

pl-lg-0, pl-lg-1, pl-lg-2, pl-lg-3, pl-lg-4, pl-lg-5

pl-xl-0, pl-xl-1, pl-xl-2, pl-xl-3, pl-xl-4, pl-xl-5
```

> Puts the text to the left.
```css
text-sm-left, text-md-left, text-lg-left, text-xl-left
```

> Puts the text to the right.
```css
text-sm-right, text-md-rigt, text-lg-right, text-xl-left
```

> Puts the text to the center.
```css
text-sm-center, text-md-center, text-lg-center, text-xl-center
```

##Note:
```javascript
"sm" is for a min-width of 576px
"md" is for a min-width of 768px
"lg" is for a min-width of 992px
"xl" is for a min-width of 1200px
```
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
flex-fill, sm-fill, md-fill, lg-fill, xl-fill
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

> Display is set in none.

```css
d-none
```

> Display is set in "inline"

```css
d-inline
```

> Display is set in "inline-block"

```css
d-inline-block
```

> Display is set in "block"

```css
d-block
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

> Changes the max width.

```css
sm, sm-auto, sm-1, sm-2, sm-3, sm-4, sm-5, sm-6, sm-7, sm-8, sm-9, sm-10, sm-11, sm-12

md, md-auto, md-1, md-2, md-3, md-4, md-5, md-6, md-7, md-8, md-9, md-10, md-11, md-12

lg, lg-auto, lg-1, lg-2, lg-3, lg-4, lg-5, lg-6, lg-7, lg-8, lg-9, lg-10, lg-11, lg-12

xl, xl-auto, xl-1, xl-2, xl-3, xl-4, xl-5, xl-6, xl-7, xl-8, xl-9, xl-10, xl-11, xl-12
```

> Changes the margin of the left.

```css
set-sm-0, set-sm-1, set-sm-2, set-sm-3, set-sm-4, set-sm-5, set-sm-6, set-sm-7, set-sm-8, set-sm-9, set-sm-10, set-sm-11

set-md-0, set-md-1, set-md-2, set-md-3, set-md-4, set-md-5, set-md-6, set-md-7, set-md-8, set-md-9, set-md-10, set-md-11

set-lg-0, set-lg-1, set-lg-2, set-lg-3, set-lg-4, set-lg-5, set-lg-6, set-lg-7, set-lg-8, set-lg-9, set-lg-10, set-lg-11

set-xl-0, set-xl-1, set-xl-2, set-xl-3, set-xl-4, set-xl-5, set-xl-6, set-xl-7, set-xl-8, set-xl-9, set-xl-10, set-xl-11
```

> Orders first and last.

```css
order-sm-first, order-sm-last

order-md-first, order-md-last

order-lg-first, order-lg-last

order-xl-first, order-xl-last
```

> Creates a new "row" element.

```css
sm-row, md-row, lg-row, xl-row
```

> Creates a new "row reverse" element

```css
sm-row-reverse, md-row-reverse, lg-row-reverse, xl-row-reverse
```

> Creates a new flex column.

```css
sm-column, md-column, lg-column, xl-column
```

> Creates a new flex column in reverse.

```css
sm-column-reverse, md-column-reverse, lg-column-reverse, xl-column-reverse
```

> Flex wrap is activated.

```css
sm-wrap, md-wrap, lg-wrap, xl-wrap
```

> Flex wrap is disabled.

```css
sm-nowrap, md-nowrap, lg-nowrap, xl-wrap
```

> Flex wrap in reverse is activated.

```css
sm-wrap-reverse, md-wrap-reverse, lg-wrap-reverse, xl-wrap-reverse
```

> The flex item with this class will ocupate the remain columns.

```css
sm-fill, md-fill, lg-fill, xl-fill
```

> This defines the ability for a flex item to grow if necessary

```css
sm-grow-0, sm-grow-1

md-grow-0, md-grow-1

lg-grow-0, lg-grow-1

xl-grow-0, xl-grow-1
```

> This defines the ability for a flex item to shrink if necessary.

```css
sm-shrink-0, sm-shrink-1

md-shrink-0, md-shrink-1

lg-shrink-0, lg-shrink-1

xl-shrink-0, xl-shrink-1
```

#Note:

```css
"sm" is for a min-width of 576px
"md" is for a min-width of 768px
"lg" is for a min-width of 992px
"xl" is for a min-width of 1200px
```

##Animations

> Essential to animate an element, makes an animation of one second of duration. To animate an element is necessary to put the class "animated" and then the class of one animation (ex: class="animated bounce").

```css
animated
```

> Makes an animation infinite.

```css
infinite
```

> The element will do a bounce animation.

```css
bounce
```

> The element disappears and appears quickly.

```css
flash
```

> The element increases its size and then it returns to its normal size.

```css
pulse
```

> The element decreases its height and increase a bit its width, then, with a fluid animation it will return to its normal size.

```css
rubberBand
```

> The element shakes a lot from the left to the right.

```css
shake
```

> The element shakes a little from the left to the right.

```css
headShake
```

> The element swings from the left to the right, like a pendulum.

```css
swing
```

> The element increases its size and shakes diagonally, and return to its normal size.

```css
tada
```

> The element wobbles from the left to the right.

```css
wobble
```

> The element shakes diagonally.

```css
jello
```

> The element suddenly appears and increases its size.

```css
bounceIn
```

> The element appears from the top.

```css
bounceInDown
```

> The element appears from te left.

```css
bounceInLeft
```

> The element appears from the right.

```css
bounceInRight
```

> The element appears from the bottom.

```css
bounceInUp
```

> The element become smaller and disappears.

```css
bounceOut
```

> The element disappears from the bottom.

```css
bounceOutDown
```

> The element disappears from the left.

```css
bounceOutLeft
```

> The element disappears from the right.

```css
bounceOutRight
```

> The element disappears from the top.

```css
bounceOutUp
```

> The element's opacity goes from 0 to 1.

```css
fadeIn
```

> The element's opacity goes from 0 to 1 and appears from the top.

```css
fadeInDown
```

> The element appears quickly from the top.

```css
fadeInDownBig
```

> The element's opacity goes from 0 to 1 and appears from the left.

```css
fadeInLeft
```

> The element appears quickly from the left.

```css
fadeInLeftBig
```

> The element's opacity goes from 0 to 1 and appears from the right.

```css
fadeInRight
```

> The element appears quickly from the right.

```css
fadeInRightBig
```

> The element's opacity goes from 0 to 1 and appears from the bottom.

```css
fadeInUp
```

> The element appears quickly from the bottom.

```css
fadeInUpBig
```

> The element's opacity goes from 1 to 0.

```css
fadeOut
```

> The element's opacity goes from 1 to 0 and disappears from the bottom.

```css
fadeOutDown
```

> The element disappears quickly from the bottom.

```css
fadeOutDownBig
```

> The element's opacity goes from 1 to 0 and disappears from the left.

```css
fadeOutLeft
```

> The element disappears quickly from the left.

```css
fadeOutLeftBig
```

> The element's opacity goes from 1 to 0 and disappears from the right.

```css
fadeOutRight
```

> The element disappears quickly from the right.

```css
fadeOutRightBig
```

> The element's opacity goes from 1 to 0 and disappears from the top.

```css
fadeOutUp
```

> The element disappears quickly from the top.

```css
fadeOutUpBig
```

> The element flips horizontallly on a 3D animation.

```css
flip
```

> The element's opacity goes from 0 to 1 and flips vertically.

```css
flipInX
```

> The element's opacity goes from 0 to 1 and flips horizontally.

```css
flipInY
```

> The element flips vertically and its opacity goes from 1 to 0.

```css
flipOutX
```

> The element flips horizontally and its opacity goes from 1 to 0.

```css
flipOutY
```

> The element appears from the right with a diagonal movement animation.

```css
lightSpeedIn
```

> The element disappears from the right with a diagonal movement animation while its opacity goes from 1 to 0.

```css
lightSpeedOut
```

> The element rotates in a 160 angle while its opacity goes from 0 to 1.

```css
rotateIn
```

> The element appears from the top rotating to the left while its opacity goes from 0 to 1.

```css
rotateInDownLeft
```

> The element appears from the top rotating to the right while its opacity goes from 0 to 1.

```css
rotateInDownRight
```

> The element appears from the bottom rotating to the left while its opacity goes from 0 to 1.

```css
rotateInUpLeft
```

> The element appears from the bottom rotating to the right while its opacity goes from 0 to 1.

```css
rotateInUpRight
```

> The element rotates in a 360 angle while its opacity goes from 1 to 0.

```css
rotateOut
```

> The element disappears from the bottom rotating to the left while its opacity goes from 1 to 0.

```css
rotateOutDownLeft
```

> The element disappears from the bottom rotating to the right while its opacity goes from 1 to 0.

```css
rotateOutDownRight
```

> The element disappears from the top rotating to the left while its opacity goes from 1 to 0.

```css
rotateOutUpLeft
```

> The element disappears from the top rotating to the right while its opacity goes from 1 to 0.

```css
rotateOutUpRight
```

> The element falls from the top to the left and disappears from the bottom.

```css
hinge
```

> The element goes from a small size to its normal size while its opacity goes from 0 to 1, with a diagonally movement animation.

```css
jackInTheBox
```

> The element appears from the left with a rolling animation while its opacity goes from 0 to 1.

```css
rollIn
```

> The element disappears from the right with a rolling animation while its opacity goes from 1 to 0.

```css
rollOut
```

> The element goes from a small size to its normal size while its opacity goes from 0 to 1, with no additional animations.

```css
zoomIn
```

> The element goes from a small size to its normal size while its opacity goes from 0 to 1, with an animation that moves it from the top to its position.

```css
zoomInDown
```

> The element goes from a small size to its normal size while its opacity goes from 0 to 1, with an animation that moves it from the left to its position.

```css
zoomInLeft
```

> The element goes from a small size to its normal size while its opacity goes from 0 to 1, with an animation that moves it from the right to its position.

```css
zoomInRight
```

> The element goes from a small size to its normal size while its opacity goes from 0 to 1, with an animation that moves it from the bottom to its position.

```css
zoomInUp
```

> The element disappears decreasing its size while its opacity goes from 1 to 0, with no additional animations.

```css
zoomOut
```

> The element disappears decreasing its size while its opacity goes from 1 to 0, with an animation that moves it to the bottom.

```css
zoomOutDown
```

> The element disappears decreasing its size while its opacity goes from 1 to 0, with an animation that moves it to the left.

```css
zoomOutLeft
```

> The element disappears decreasing its size while its opacity goes from 1 to 0, with an animation that moves it to the right.

```css
zoomOutRight
```

> The element disappears decreasing its size while its opacity goes from 1 to 0, with an animation that moves it to the top.

```css
zoomOutUp
```

> The element appears slowly from the top.

```css
slideInDown
```

> The element appears slowly from the left.

```css
slideInLeft
```

> The element appears slowly from the right.

```css
slideInRight
```

> The element appears slowly from the bottom.

```css
slideInUp
```

> The element moves to the bottom and disappears.

```css
slideOutDown
```

> The element moves to the left and disappears.

```css
slideOutLeft
```

> The element moves to the right and disappears.

```css
slideOutRight
```

> The element moves to the top and disappears.

```css
slideOutUp
```

##Colors

> Primary.

```css
#6200ea / rgb(98,0,234)
```

> Info.

```css
#00b0ff / rgb(0,176,255)
```

> Succsess.

```css
#3ebb3c / rgb(0,200,83)
```

> Warning.

```css
#fbd82b / rgb(255,145,0)
```

> Danger.

```css
#dc2649 / rgb(255,23,68)
```

> Adds a grey background

```css
wrapper
```

> Navbar components

```css
navbar-nav, navbar-inverse, navbar-light, dropdown-menu, navbar-raised

nav-link, dropdown-item (to children elements)
```

> Adds an purple cover to the entire page, and doesn't let select anything in the page. A class to block all page's user interaction.

```css
hero-header
```

> Adds a diferent background color with each class.

```css
bg-alt, bg-primary, badge-primary, bg-success, badge-success, bg-info, badge-info, bg-warning, badge-warning, bg-danger, badge-danger, bg-inverse
```

> Text colors.

```css
text-alt, text-faded, text-muted, text-default, badge-default, text-primary, text-dark, text-success, text-infotext-warning, text-danger, lead
```

> Types of buttons.

```css
btn, btn-icon, input-group-btn, btn-round, btn-circle, btn-link, active
```

> Button sizes (from lowest to highest).

```css
btn-xs, btn-sm, btn-md, btn-lg.
```

> Button colors.

```css
btn-white, btn-outline-white, btn-dark, btn-outline-dark, btn-secondary, btn-outline-secondary, btn-primary, btn-outline-primary, btn-success, btn-outline-success, btn-info, btn-outline-info, btn-warning, btn-outline-warning, btn-danger, btn-outline-danger

dropdown-toggle(for children elements)
```

> Form elements.

```css
form-control, form-control-success, col-form-label, custom-control, form-check-label, form-control-feedback, form-control-label, form-control-warning, form-control-danger, custom-control-input, custom-control-indicator

form-control-lg, form-control-sm, input-group, title

(Prymary classes, to use with: col-form-label, custom-control, form-check-label, form-control-feedback, form-control-label) has-warning, has-danger, has-success
```

> Progress bar colors.

```css
progress, progress-bar, progress-success, progress-info, progress-warning, progress-danger
```

> Navigation pills.

```css
nav-pills, nav-item, nav-link, nav-pills-primary, nav-pills-info, nav-pills-success, nav-pills-warning, nav-pills-danger
active
```

> Pagination.

```css
pagination, page-item, page-link, arrow-margin-left, arrow-margin-right, pagination-info, pagination-success, pagination-primary, pagination-warning, pagination-danger

acvite, disable
```

> Alerts.

```css
alert, alert-success, alert-info, alert-warning, alert-danger, alert-primary, alert-alt, alert-dismissible, close, fade, collapse, alert-body, close
```

> Navigation Tabs.

```css
nav-tabs, nav-item, nav-link, nav-tabs-primary, nav-tabs-success, nav-tabs-info, nav-tabs-warning, nav-tabs-danger

disabled, active
```

> Typography.

```css
blockquote, blockquote-footer, blockquote-primary, blockquote-success, blockquote-info, blockquote-warning, blockquote-danger, blockquote-dark
```

> Media.

```css
img-raised, carousel-item-next, carousel-item-prev, carousel-item, carousel, carousel-inner, carousel-icon

active
```

> Modal.

```css
modal-open, navbar-fixed-top, navbar-fixed-bottom

modal-content, modal-header, title, modal-body, modal-backdrop, close
```

> Popovers.

```css
popover, popover-title, bs-tether-element-attached-top
```

> Tooltips.

```css
tooltip, bs-tether-element-attached-right, bs-tether-element-attached-top, bs-tether-element-attached-bottom, bs-tether-element-attached-left, tooltip-inner
```

> Color sections (can use "nav-pills, nav-item, nav-link, hero-header" as secondary clases!).

```css
colored-section, title, input-group-addon, input-group-focus, input-group-addon, form-group, input-group-addon, card, card-block, tab-content, tab-pane, footer
```

##Utilities

> Applies a width determined by the value next to "w-".

```css
w-25, w-50, w-75, w-100, w-auto
```

> Applies a height determined by the value next to "h-".

```css
h-25, h-50, h-75, h-100, h-auto
```

> Changes the margin.

```css
m-0, m-1, m-2, m-3, m-4, m-5.
```

> Changes the margin of the top.

```css
mt-0, mt-1, mt-2, mt-3, mt-4, mt-5
```

> Changes the margin of the bottom.

```css
mb-0, mb-1, mb-2, mb-3, mb-4, mb-5
```

> Changes the margin of the top and bottom.

```css
my-0, my-1, my-2, my-3, my-4, my-5
```

> Changes the margin of the left.

```css
ml-0, ml-1, ml-2, ml-3, ml-4, ml-5
```

> Changes the margin of the right.

```css
mr-0, mr-1, mr-2, mr-3, mr-4, mr-5
```

> Changes the margin of the left and the right.

```css
mx-0, mx-1, mx-2, mx-3, mx-4, mx-5
```

> Changes the padding.

```css
p-0, p-1, p-2, p-3, p-4, p-5
```

> Changes the padding of the top.

```css
pt-0, pt-1, pt-2, pt-3, pt-4, pt-5
```

> Changes the paddin of the bottom.

```css
pb-1, pb-2, pb-3, pb-4, pb-5
```

> Changes the padding of the top and the bottom.

```css
py-0, py-1, py-2, py-3, py-4, py-5
```

> Changes the padding of the left.

```css
pl-0, pl-1, pl-2, pl-3, pl-4, pl-5
```

> Changes the padding of the right.

```css
pr-0, pr-1, pr-2, pr-3, pr-4, pr-5
```

> Changes the padding of the left and right.

```css
px-0, px-1, px-2, px-3, px-4, px-5
```

> The element will float to the right.

```css
float-right
```

> The element will float to the left.

```css
float-left
```

> The element won't float.

```css
float-none
```

> Text align is set to "justify".

```css
text-justify
```

> The text won't wrap to the next line.

```css
text-nowrap
```

> Text align is set to "left".

```css
text-left
```

> Text align is set to "right".

```css
text-right
```

> Text align is set to "center".

```css
text-center
```

> Set a font size of 80px.

```css
icon-xl
```

> Set a font size of 60px.

```css
icon-lg
```

> Set a font size of 45px.

```css
icon-md
```

> Set a font size of 30px.

```css
icon-sm
```

> Eliminates the border.

```css
border-none
```

> Puts all the borders.

```css
border-all
```

> Puts a border in the left.

```css
border-left
```

> Puts a border in the right.

```css
border-right
```

> Puts a border in the top.

```css
border-top
```

> Puts a border in the bottom.

```css
border-bottom
```

> A colored footer

```css
footer
```

##CSS elements

> Form elements

```css
form-control-lg, form-control-sm, input-group, title, input-group-addon
```

> Card elements

```css
card, card-progress, card-primary, card-secondary, card-success, card-danger, card-warning, card-info, card-dark, card, card-header, card-footer, card-body, card-footer-grey, card-lg, card-sm, card-sm-2, card-sm-3, card-sm-4, card-sm-5, card-lg, card-icon, card-progressbar, card-cta, card-wrap, card-options, card-icon, bg-primary, bg-danger, bg-success, bg-info, bg-dark, bg-warning, card-footer
```

> Image elements

```css
img-fluid, img-thumbnail, rounded, rounded-top, rounded-right, rounded-bottom, rounded-left, rounded-circle, rounded-0
```

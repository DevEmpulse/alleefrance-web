'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  forceMount,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  if (forceMount) {
    // Always mounted so the answer stays in the static HTML. The panel opens and
    // closes by animating its grid row between 0fr and 1fr, and closed panels turn
    // `invisible` once the collapse ends, which hides them from view, focus and
    // assistive tech. Radix leaves inline `transition-duration`/`animation-name`
    // overrides on the node after measuring it, so the transition is `!important`.
    return (
      <AccordionPrimitive.Content
        data-slot="accordion-content"
        forceMount
        className="grid overflow-hidden text-sm data-[state=open]:grid-rows-[1fr] data-[state=open]:[transition:grid-template-rows_0.2s_ease-out,visibility_0s_linear_0s]! data-[state=closed]:invisible data-[state=closed]:grid-rows-[0fr] data-[state=closed]:[transition:grid-template-rows_0.2s_ease-out,visibility_0s_linear_0.2s]!"
        {...props}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={cn('pt-0 pb-4', className)}>{children}</div>
        </div>
      </AccordionPrimitive.Content>
    )
  }

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

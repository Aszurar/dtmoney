import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign } from "react-icons/fi";
import { VariantProps, tv } from "tailwind-variants";

const highLightCard = tv({
  slots: {
    container: "flex flex-col bg-white w-highlightcard drop-shadow-md px-8 pt-6 pb-5 gap-3 rounded-md",
    icon: "text-2.5xl",
    textColor: "text-gray-700"
  },
  variants: {
    variant: {
      income: {
        icon: "text-green-400",
      },
      outcome: {
        icon: "text-red-500",
      },
      total: {
        container: "bg-green-400",
        icon: "text-white",
        textColor: "text-white",
      }
    }
  },

  defaultVariants: {
    variant: "income"
  }
})

type HighLightCardProps = VariantProps<typeof highLightCard> & {
  value: string;
}

export function HighLightCard({ variant, value }: HighLightCardProps) {
  const { container, icon, textColor } = highLightCard({ variant });
  const titleVariant = variant ?? "income"

  const title = {
    income: {
      title: "Entradas",
      icon: <FiArrowUpCircle className={icon()} />
    },
    outcome: {
      title: "Saídas",
      icon: <FiArrowDownCircle className={icon()} />
    },
    total: {
      title: "Total",
      icon: <FiDollarSign className={icon()} />
    },
  }

  return (
    <div className={container()}>
      <header className="flex justify-between items-center">
        <h2 className={textColor()}>{title[titleVariant].title}</h2>
        {title[titleVariant].icon}
      </header>

      <div className="flex gap-2">
        <span className={textColor({ className: "text-2.5xl" })}>R$</span>
        <strong className={textColor({ className: "text-2.5xl font-medium" })}>{value}</strong>
      </div>
    </div>
  )
}
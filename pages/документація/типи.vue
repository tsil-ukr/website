<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Композиції | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/субʼєкти" next="/документація/цілі">
    <h1 class="UiDocsLayoutTitle">Типи</h1>
    <p>
      Система типів в <strong>Цілі</strong> статична. Це означає, що всі типи
      визначаються під час компіляції і є незмінними протягом виконання.
    </p>
    <p>Список доступних вбудованих типів:</p>
    <ul>
      <li>
        <b>ціле</b>
        <p>
          ціле це тип позитивного або негативного цілого числа, що має розмір
          відповідно до платформи (64 біти або 32 біти).
        </p>
        <UiCodeBlock code="ціль а = 2;" borderless />
      </li>
      <li>
        <b>ц64</b>
        <p>
          ц64 це тип позитивного або негативного цілого числа, що має розмір 64
          біти.
        </p>
        <UiCodeBlock code="ціль а: ц64 = -3383;" borderless />
      </li>
      <li>
        <b>ц32</b>
        <p>
          ц32 це тип позитивного або негативного цілого числа, що має розмір 32
          біти.
        </p>
        <UiCodeBlock code="ціль а: ц32 = 22;" borderless />
      </li>
      <li>
        <b>ц8</b>
        <p>
          ц8 це тип позитивного або негативного цілого числа, що має розмір 8
          бітів.
        </p>
        <UiCodeBlock code="ціль а: ц8 = 127;" borderless />
      </li>
      <li>
        <b>дійсне</b>, або <b>д64</b>:
        <p>
          дійсне це тип позитивного або негативного дійсного числа, що має
          розмір відповідно до платформи (64 біти або 32 біти).
        </p>
        <UiCodeBlock code="ціль а = 3.14;" borderless />
      </li>
      <li>
        <b>д32</b>
        <p>
          д32 це тип позитивного або негативного дійсного числа, що має розмір
          32 біти.
        </p>
        <UiCodeBlock code="ціль а: д32 = 2.12;" borderless />
      </li>
      <li>
        <b>позитивне</b>
        <p>
          позитивне це тип позитивного цілого числа, що має розмір відповідно до
          платформи (64 біти або 32 біти).
        </p>
        <UiCodeBlock code="ціль а: позитивне = 2;" borderless />
      </li>
      <li>
        <b>п64</b>
        <p>п64 це тип позитивного цілого числа, що має розмір 64 біти.</p>
        <UiCodeBlock code="ціль а: п64 = -3383;" borderless />
      </li>
      <li>
        <b>п32</b>
        <p>п32 це тип позитивного цілого числа, що має розмір 32 біти.</p>
        <UiCodeBlock code="ціль а: п32 = 22;" borderless />
      </li>
      <li>
        <b>п8</b>
        <p>п8 це тип позитивного цілого числа, що має розмір 8 бітів.</p>
        <UiCodeBlock code="ціль а: п8 = 256;" borderless />
      </li>
      <li>
        <b>логічне</b>
        <p>логічне має два значення: так або ні</p>
        <UiCodeBlock
          :code="
            `ціль добре = так;
ціль погано = ні;`.trim()
          "
          borderless
        />
      </li>
      <li>
        <b>текст</b>
        <p>текст це структурований тип, що зберігає unicode-текст.</p>
        <UiCodeBlock code='ціль п = "привіт";' borderless />
      </li>
      <li>
        <b>[]</b>
        <p>[] це тип ...</p>
        <UiCodeBlock
          :code="`ціль числа: ціле[4];
числа[1] = 227;
ціль перше = числа[1]; // 227`"
          borderless
        />
      </li>
      <li>
        <b>невідома_комірка</b>
        <p>невідома_комірка це тип комірки, що містить якісь дані.</p>
      </li>
      <li>
        <b>комірка&lt;Т&gt;</b>
        <p>
          комірка&lt;Т&gt; це тип комірки, що містить одну позицію даних
          відомого типу.
        </p>
        <UiCodeBlock code="ціль байт = виділити<п8>();" borderless />
      </li>
      <li>
        <b>памʼять&lt;Т&gt;</b>
        <p>
          памʼять&lt;Т&gt; це тип комірки, що міститить декілька позицій даних
          відомого типу.
        </p>
        <UiCodeBlock
          code="ціль байти = виділити<п8>(256);
байти[0] = 33;"
          borderless
        />
      </li>
      <li>
        <b>Т -> Т</b>
        <p>Т -> Т це тип комірки, що містить дію.</p>
        <UiCodeBlock
          code="дія сума(а: ціле, б: ціле): ціле {
  вернути а + б;          
}

ціль д: (ціле, ціле) -> ціле = привіт;
"
          borderless
        />
      </li>
    </ul>
  </UiDocsWrapper>
</template>

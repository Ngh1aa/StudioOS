# Tasks / Typography visual check

Desktop preview at 1440×1000 confirms the new Tasks composition renders with the intended structure: page title and kicker at the top, metric strip, focused queue panel, task list heading, compact task rows, priority markers, due column, and the suggested-focus side column.

The screenshot showed the page content with a temporary low-opacity treatment while the iframe navigation transition was settling. This is consistent with the existing page-transition system rather than a layout failure; the sidebar remains fully opaque and the new task grid does not overflow horizontally. The final runtime regression should be checked after the production deploy with transitions disabled or fully settled.

Mobile preview at 390×844 confirms the shell collapses correctly: the mobile topbar is visible, the metric strip becomes a two-column stack, the dark note card spans the width, filters wrap inside the task panel, and the first task row remains readable without horizontal overflow.

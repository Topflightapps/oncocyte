<?php
if (isset($events) && count($events) > 0) { ?>
<div class="upcoming-events--scroll">
	<div class="upcoming-events--container" style="width: <?php echo count($events) * 400; ?>px;">
		<?php
		foreach ($events as $key => $event) { ?>
		<div class="event--container event-bg-<?php echo ($key % 4 == 0 ? 'dark-blue' : ($key % 4 == 1 ? 'orange' : ($key % 4 == 2 ? 'purple' : 'dark-green'))) ?>">
			<div class="event--image">
				<img src="<?php echo $event["featured_image"] ?>">
			</div>
			<div class="event--label"><?php echo $event["date"] ?></div>
			<div class="event--title"><?php echo $event["title"] ?></div>
			<a class="event--details-link" target="_blank" href="<?php echo $event["link"] ?>">Details</a>
		</div>
		<?php 
		}?>
	</div>
</div>
<?php
} ?>